"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { ArrowRight, Loader } from "lucide-react";
import { useAuthModal } from "~/store/use-auth-modal";

import { Button } from "~/components/ui/button";
import { trpc } from "~/app/_trpc/client";
import { useMbWallet } from "@mintbase-js/react";

export default function LandingPage() {
  const router = useRouter();
  const { onOpen } = useAuthModal();
  const { isConnected, modal } = useMbWallet();
  const [isRouting, setIsRouting] = useState(false);
  const { data: user, isLoading } = trpc.user.getAuthProfile.useQuery();

  const handleClick = useCallback(() => {
    if (!user) {
      return onOpen();
    }
    if (!isConnected) {
      return modal.show();
    }
    setIsRouting(true);
    return router.push("/explore");
  }, [onOpen, user, router, modal, isConnected]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-10">
      <h1 className="max-w-3xl text-balance text-center text-5xl font-bold leading-normal md:text-6xl md:leading-normal lg:text-7xl lg:leading-normal">
        You&apos;re one step away from the world of{" "}
        <span className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text font-extrabold uppercase text-transparent">
          blockchain
        </span>
      </h1>
      <Button
        variant="theme"
        disabled={isLoading || isRouting}
        onClick={handleClick}
        className="p-6 text-xl transition duration-300 hover:scale-105 active:scale-100 md:p-8 md:text-2xl"
      >
        Get Started
        {isLoading || isRouting ? (
          <Loader className="ml-4 animate-spin" />
        ) : (
          <ArrowRight className="ml-4" />
        )}
      </Button>
    </div>
  );
}
