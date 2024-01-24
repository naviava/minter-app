"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuthModal } from "~/store/use-auth-modal";
import { Button } from "~/components/ui/button";

import { cn } from "~/lib/utils";
import { trpc } from "~/app/_trpc/client";

interface IProps {
  label: string;
  href: string;
  requireAuth?: boolean;
}

export function NavRoute({ label, href, requireAuth }: IProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { onOpen } = useAuthModal();
  const { data: user } = trpc.user.getAuthProfile.useQuery();

  const handleClick = useCallback(() => {
    if (requireAuth && !user) return onOpen();
    router.push(href);
  }, [href, requireAuth, router, user, onOpen]);

  return (
    <Button
      variant="link"
      size="sm"
      onClick={handleClick}
      className={cn("md:text-base", pathname === href && "font-bold underline")}
    >
      {label}
    </Button>
  );
}
