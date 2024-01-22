import { NearWalletConnector } from "~/components/near-wallet-selector";
import { serverClient } from "../_trpc/server-client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function LandingPage() {
  const user = await serverClient.user.getAuthProfile();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-10">
      <h1 className="max-w-3xl text-balance text-center text-7xl font-bold leading-normal">
        You&apos;re one step away from the world of{" "}
        <span className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text font-extrabold uppercase text-transparent">
          blockchain
        </span>
      </h1>
      <Button className="bg-gradient-to-r from-red-600 to-indigo-600 p-8 text-2xl text-white transition duration-300 hover:scale-105 active:scale-100">
        Get Started
        <ArrowRight className="ml-4" />
      </Button>
    </div>
  );
}
