import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "~/components/providers/session-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Minter App",
    template: "%s | Minter App",
  },
  description: "An NFT minter app created for Abstraction Hackathon.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
