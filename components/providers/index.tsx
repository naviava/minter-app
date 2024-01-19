"use client";

import { MintbaseWalletContextProvider } from "@mintbase-js/react";
import { ThemeProvider } from "./theme-provider";
import { TRPCProvider } from "./trpc-provider";

const MintbaseWalletSetup = {
  contractAddress: "hellovirtualworld.mintspace2.testnet",
  network: "testnet" as any,
  callbackUrl: "http://localhost:3000",
};

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  return (
    <MintbaseWalletContextProvider {...MintbaseWalletSetup}>
      <TRPCProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </TRPCProvider>
    </MintbaseWalletContextProvider>
  );
}
