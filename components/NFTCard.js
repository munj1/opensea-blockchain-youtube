import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import Router from "next/router";

const style = {
  wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
  imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full object-cover`,
  details: `p-3`,
  info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm text-[#8a939b]`,
  assetName: `font-bold text-lg mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm text-[#8a939b]`,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
  likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
  likeIcon: `text-xl mr-2`,
};

{
  /* <NFTCard
key={id}
nftItem={nftItem}
title={collection?.title}
listings={listings}
/> */
}

// add props as parameters
const NFTCard = ({ nftItem, title, listings }) => {
  // 1. check if listed or not
  // listing & nfts => isListed ==true
  // then, setprice
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const listing = listings.find((listing) => listing.asset.id === nftItem.id);
    if (Boolean(listing)) {
      setIsListed(true);
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
    }

    // for (const listing of listings) {
    //   if (listing.asset.id === nftItem.id) {
    //     setIsListed(true);
    //     setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
    //     break;
    //   }
    // }
  }, [listings, nftItem]);

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        Router.push({
          pathname: `/nfts/${nftItem.id}`,
          query: { isListed: isListed },
        });
      }}
    >
      <div className={style.imgContainer}>
        <img src={nftItem.image} alt={nftItem.name} className={style.nftImg} />
      </div>
      <div className={style.details}>
        <div className={style.info}>
          <div className={style.infoLeft}>
            <div className={style.collectionName}>{title}</div>
            <div className={style.assetName}>{nftItem.name}</div>
          </div>
          {isListed && (
            <div className={style.infoRight}>
              <div className={style.priceTag}>Price</div>
              <div className={style.priceValue}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png"
                  alt="eth"
                  className={style.ethLogo}
                />
                {price}
              </div>
            </div>
          )}
        </div>
        <div className={style.likes}>
          <span className={style.likeIcon}>
            <BiHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
