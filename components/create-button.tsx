"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { Loader, Plus } from "lucide-react";
import { useMbWallet } from "@mintbase-js/react";

import { Button } from "~/components/ui/button";
import { trpc } from "~/app/_trpc/client";

export function CreateButton() {
  const router = useRouter();
  const { isConnected, modal } = useMbWallet();
  const [isRouting, setIsRouting] = useState(false);

  const { data: user } = trpc.user.getAuthProfile.useQuery();

  const handleClick = useCallback(() => {
    if (!isConnected) {
      return modal.show();
    }
    setIsRouting(true);
    return router.push("/create");
  }, [isConnected, modal, router]);

  if (!user) return null;

  return (
    <Button
      variant="theme"
      size="sm"
      disabled={isRouting}
      onClick={handleClick}
      className="rounded-full"
    >
      Create
      {isRouting ? (
        <Loader className="ml-2 h-4 w-4 animate-spin" />
      ) : (
        <Plus className="ml-2 h-4 w-4" />
      )}
    </Button>
  );
}
