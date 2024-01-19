"use client";
import { ThemeProvider } from "./theme-provider";
import { TRPCProvider } from "./trpc-provider";

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  return (
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
  );
}
