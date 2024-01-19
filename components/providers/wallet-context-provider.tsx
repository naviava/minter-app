"use client";

import { MintbaseWalletContextProvider } from "@mintbase-js/react";
import "@near-wallet-selector/modal-ui/styles.css";

interface IProps {
  children: React.ReactNode;
}

const MintbaseWalletSetup = {
  contractAddress: "hellovirtualworld.mintspace2.testnet",
  network: "testnet" as any,
  callbackUrl: "http://localhost:3000",
};

export default function App({ children }: IProps) {
  return (
    <MintbaseWalletContextProvider {...MintbaseWalletSetup}>
      {children}
    </MintbaseWalletContextProvider>
  );
}
