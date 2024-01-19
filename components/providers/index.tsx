"use client";
import { TRPCProvider } from "./trpc-provider";

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  return <TRPCProvider>{children}</TRPCProvider>;
}
