import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { dedicatedWalletConnector } from "@magiclabs/wagmi-connector";

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    dedicatedWalletConnector({
      chains: [mainnet, sepolia],
      options: {
        apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY as string,
        isDarkMode: true,
        oauthOptions: {
          providers: [],
        },
        magicSdkConfiguration: {
          network: {
            rpcUrl: `https://sepolia.infura.io/v3/${"daf3b69d385d45e5a303291be47061d6"}`,
            chainId: 11155111,
          },
        },
      },
    }),
  ],
});
