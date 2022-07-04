import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

/*
 * The chain Id 4 represents the rinkeby network
 * the 'injected' connector is a web3 connection method used by metamask
 */

const supportedChainIds = [4]; //Rinkeby
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
