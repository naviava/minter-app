"use client";

import { useAuthModal } from "~/store/use-auth-modal";

import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { UserAvatar } from "~/components/user-avatar";
import { UserActions } from "./user-actions";

import { trpc } from "~/app/_trpc/client";

export function AuthTrigger() {
  const { onOpen } = useAuthModal();
  const { data: user, isLoading } = trpc.user.getAuthProfile.useQuery();

  if (isLoading) return <Skeleton className="h-9 w-9 rounded-full" />;

  return (
    <div>
      {!user && (
        <Button variant="link" size="sm" onClick={onOpen}>
          Sign in
        </Button>
      )}
      {!!user && (
        <UserActions>
          <UserAvatar userName={user.name} imageUrl={user.image} />
        </UserActions>
      )}
    </div>
  );
}
