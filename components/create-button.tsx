"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Loader, Plus } from "lucide-react";
import { useMbWallet } from "@mintbase-js/react";
import { Button } from "~/components/ui/button";

export function CreateButton() {
  const router = useRouter();
  const { isConnected, modal } = useMbWallet();
  const [isRouting, setIsRouting] = useState(false);

  const handleClick = useCallback(() => {
    if (!isConnected) {
      return modal.show();
    }
    setIsRouting(true);
    return router.push("/create");
  }, [isConnected, modal, router]);

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
