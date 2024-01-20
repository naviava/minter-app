import { NearWalletConnector } from "~/components/near-wallet-selector";
import { serverClient } from "../_trpc/server-client";
import Link from "next/link";

export default async function LandingPage() {
  const user = await serverClient.user.getAuthProfile();

  return (
    <main>
      <Link href="/test">Test Page</Link>
    </main>
  );
}
