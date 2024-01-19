import { NearWalletConnector } from "~/components/near-wallet-selector";
import { serverClient } from "./_trpc/server-client";

export default async function Home() {
  const user = await serverClient.user.getAuthProfile();

  return (
    <main>
      <NearWalletConnector />
    </main>
  );
}
