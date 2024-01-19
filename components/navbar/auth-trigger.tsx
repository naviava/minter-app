"use client";

import { useAuthModal } from "~/store/use-auth-modal";
import { Button } from "~/components/ui/button";
import { UserAvatar } from "~/components/user-avatar";
import { trpc } from "~/app/_trpc/client";

export function AuthTrigger() {
  const { onOpen } = useAuthModal();
  const { data: user } = trpc.user.getAuthProfile.useQuery();

  return (
    <div>
      {!user && (
        <Button variant="link" size="sm" onClick={onOpen}>
          Sign in
        </Button>
      )}
      {!!user && <UserAvatar userName={user.name} imageUrl={user.image} />}
    </div>
  );
}
