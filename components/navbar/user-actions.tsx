"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { signOut } from "next-auth/react";
import { useMbWallet } from "@mintbase-js/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { UserActionItems } from "./user-action-items";

import { trpc } from "~/app/_trpc/client";
import { LogOut, Unplug } from "lucide-react";

interface IProps {
  children: React.ReactNode;
}

export function UserActions({ children }: IProps) {
  const router = useRouter();

  const { data: user } = trpc.user.getAuthProfile.useQuery();
  const { isConnected, selector, connect, activeAccountId } = useMbWallet();

  const { mutate: handleLinkWallet } = trpc.user.linkWallet.useMutation({
    onError: async ({ message }) => {
      toast.error(message);
      const wallet = await selector.wallet();
      wallet.signOut();
    },
    onSuccess: (data) => {
      if (data.isNew) {
        toast.success("Wallet Added: " + activeAccountId);
      }
    },
  });

  const handleConnectWallet = useCallback(async () => {
    await connect();
  }, [connect]);

  const handleDisconnectWallet = useCallback(async () => {
    const wallet = await selector.wallet();
    wallet.signOut();
    return toast.success("Wallet disconnected");
  }, [selector]);

  const handleSignOut = useCallback(async () => {
    if (isConnected) {
      const wallet = await selector.wallet();
      wallet.signOut();
    }
    signOut();
    router.push("/");
  }, [selector, router, isConnected]);

  useEffect(() => {
    if (isConnected && activeAccountId) {
      handleLinkWallet(activeAccountId);
    }
  }, [isConnected, activeAccountId, handleLinkWallet]);

  if (!user) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="text-center">
            {isConnected ? (
              <>
                <p className="font-light">Active wallet:</p>
                <p>{activeAccountId}</p>
              </>
            ) : (
              <p className="text-center text-xs font-light text-muted-foreground">
                No wallet connected
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <UserActionItems />
        <DropdownMenuSeparator />
        {isConnected ? (
          <DropdownMenuItem onClick={handleDisconnectWallet}>
            <Unplug className="mr-2 h-4 w-4" />
            Disconnect Wallet
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={handleConnectWallet}>
            <Unplug className="mr-2 h-4 w-4" />
            Connect Wallet
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
