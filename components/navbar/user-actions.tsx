"use client";

import { useCallback, useEffect } from "react";

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
import { trpc } from "~/app/_trpc/client";

interface IProps {
  children: React.ReactNode;
}

export function UserActions({ children }: IProps) {
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
    const wallet = await selector.wallet();
    wallet.signOut();
    signOut();
  }, [selector]);

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
        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        {isConnected ? (
          <DropdownMenuItem onClick={handleDisconnectWallet}>
            Disconnect Wallet
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={handleConnectWallet}>
            Connect Wallet
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
