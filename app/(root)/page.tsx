"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { ArrowRight, Loader } from "lucide-react";
import { useAuthModal } from "~/store/use-auth-modal";

import { Button } from "~/components/ui/button";
import { trpc } from "~/app/_trpc/client";

export default function LandingPage() {
  const router = useRouter();
  const { onOpen } = useAuthModal();
  const { data: user, isLoading } = trpc.user.getAuthProfile.useQuery();

  const handleClick = useCallback(() => {
    if (!user) {
      return onOpen();
    }
    return;
  }, [onOpen, user]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-10">
      <h1 className="max-w-3xl text-balance text-center text-7xl font-bold leading-normal">
        You&apos;re one step away from the world of{" "}
        <span className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text font-extrabold uppercase text-transparent">
          blockchain
        </span>
      </h1>
      <Button
        disabled={isLoading}
        onClick={handleClick}
        className="bg-gradient-to-r from-red-600 to-indigo-600 p-8 text-2xl text-white transition duration-300 hover:scale-105 active:scale-100"
      >
        Get Started
        {isLoading ? (
          <Loader className="ml-4 animate-spin" />
        ) : (
          <ArrowRight className="ml-4" />
        )}
      </Button>
    </div>
  );
}
