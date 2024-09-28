import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  polygonMumbai,
  optimismGoerli,
  arbitrumGoerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";

const { chains, provider } = configureChains(
  [
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
  ],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

// Removing wallet apps by setting an empty array for connectors
const wagmiClient = createClient({
  autoConnect: true,
  connectors: [], // No wallets will be available
  provider,
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
        chains={chains}
      >
        <MainLayout>
          {/* Custom Connect Wallet Button */}
          <ConnectButton.Custom>
            {({ account, openConnectModal, openAccountModal }) => {
              return account ? (
                <button onClick={openAccountModal}>
                  Your Custom Name (Connected)
                </button>
              ) : (
                <button onClick={openConnectModal}>
                  Your Custom Button Name
                </button>
              );
            }}
          </ConnectButton.Custom>

          <Component {...pageProps} />
        </MainLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
