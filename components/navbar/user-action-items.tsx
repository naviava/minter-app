"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMbWallet } from "@mintbase-js/react";
import { BookOpenText, Heart, Orbit, PlusCircle } from "lucide-react";

import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";

export function UserActionItems() {
  const router = useRouter();
  const { isConnected, modal } = useMbWallet();

  const handleCreateNftRoute = useCallback(() => {
    if (!isConnected) return modal.show();
    return router.push("/create");
  }, [router, modal, isConnected]);

  return (
    <>
      <DropdownMenuItem onClick={() => router.push("/explore")}>
        <BookOpenText className="mr-2 h-4 w-4" />
        Explore
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => router.push("/my-space")}>
        <Orbit className="mr-2 h-4 w-4" />
        My Space
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => router.push("/my-space/favorites")}>
        <Heart className="mr-2 h-4 w-4" />
        My Favorites
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleCreateNftRoute}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create NFT
      </DropdownMenuItem>
    </>
  );
}
