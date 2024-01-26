import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getServerSession } from "next-auth";
import "@near-wallet-selector/modal-ui/styles.css";

import { Toaster } from "~/components/ui/sonner";
import { Providers } from "~/components/providers";
import SessionProvider from "~/components/providers/session-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MintSaga App",
    template: "%s | MintSaga App",
  },
  description:
    "Preserve and share historical events through captivating images, titles, and descriptions on the blockchain.",
  icons: [{ url: "/logo.svg", href: "/logo.svg" }],
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
        <SessionProvider session={session}>
          <Providers>{children}</Providers>
          <Toaster position="top-center" />
        </SessionProvider>
      </body>
    </html>
  );
}
