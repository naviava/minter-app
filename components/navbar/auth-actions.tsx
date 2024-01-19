"use client";

import { useAuthModal } from "~/store/use-auth-modal";
import { Button } from "~/components/ui/button";
import { trpc } from "~/app/_trpc/client";

export function AuthActions() {
  const { onOpen } = useAuthModal();
  const { data: user } = trpc.user.getAuthProfile.useQuery();

  return (
    <div>
      {!user && (
        <Button variant="link" size="sm" onClick={onOpen}>
          Sign in
        </Button>
      )}
    </div>
  );
}
