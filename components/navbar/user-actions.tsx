import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { trpc } from "~/app/_trpc/client";
import { signOut } from "next-auth/react";
import { useCallback } from "react";
import { useMbWallet } from "@mintbase-js/react";

interface IProps {
  children: React.ReactNode;
}

export function UserActions({ children }: IProps) {
  const { data: user } = trpc.user.getAuthProfile.useQuery();
  const { isConnected, selector, connect, activeAccountId } = useMbWallet();

  const handleConnectWallet = useCallback(async () => {
    await connect();
    console.log(activeAccountId);
  }, [connect, activeAccountId]);

  const handleDisconnectWallet = useCallback(async () => {
    const wallet = await selector.wallet();
    return wallet.signOut();
  }, [selector]);

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
        {!isConnected && (
          <DropdownMenuItem onClick={handleConnectWallet}>
            Connect Wallet
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        {isConnected && (
          <DropdownMenuItem onClick={handleDisconnectWallet}>
            Disconnect Wallet
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
