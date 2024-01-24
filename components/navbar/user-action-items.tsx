"use client";

import { useRouter } from "next/navigation";
import { useMbWallet } from "@mintbase-js/react";
import { useAuthModal } from "~/store/use-auth-modal";

import { DropdownMenuItem } from "~/components/ui/dropdown-menu";
import { trpc } from "~/app/_trpc/client";
import { useCallback } from "react";

export function UserActionItems() {
  const router = useRouter();
  const { isConnected, modal } = useMbWallet();
  const { onOpen: openAuthModal } = useAuthModal();
  const { data: user } = trpc.user.getAuthProfile.useQuery();

  const handleMySpaceRoute = useCallback(() => {
    if (!user) return openAuthModal();
    return router.push("/my-space");
  }, [router, user, openAuthModal]);

  const handleCreateNftRoute = useCallback(() => {
    if (!user) return openAuthModal();
    if (!isConnected) return modal.show();
    return router.push("/create");
  }, [router, user, modal, isConnected, openAuthModal]);

  return (
    <>
      <DropdownMenuItem onClick={() => router.push("/explore")}>
        Explore
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleMySpaceRoute}>My Space</DropdownMenuItem>
      <DropdownMenuItem onClick={handleCreateNftRoute}>
        Create NFT
      </DropdownMenuItem>
    </>
  );
}
