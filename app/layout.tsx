import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "~/lib/config";

import { getServerSession } from "next-auth";
import "@near-wallet-selector/modal-ui/styles.css";

import { Toaster } from "~/components/ui/sonner";
import { Providers } from "~/components/providers";
import SessionProvider from "~/components/providers/session-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: config.APP_NAME,
    template: config.APP_TITLE_TEMPLATE,
  },
  description: config.APP_DESCRIPTION,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  icons: [{ url: "/logo.svg", href: "/logo.svg" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: config.APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: config.APP_NAME,
    title: {
      default: config.APP_DEFAULT_TITLE,
      template: config.APP_TITLE_TEMPLATE,
    },
    description: config.APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: config.APP_DEFAULT_TITLE,
      template: config.APP_TITLE_TEMPLATE,
    },
    description: config.APP_DESCRIPTION,
  },
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
