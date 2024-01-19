import { NearWalletConnector } from "~/components/near-wallet-selector";
import { serverClient } from "../_trpc/server-client";

export default async function LandingPage() {
  const user = await serverClient.user.getAuthProfile();

  return <main>Hello World</main>;
}
