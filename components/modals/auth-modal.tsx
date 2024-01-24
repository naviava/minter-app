"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { DNA } from "react-loader-spinner";

import { useAuthModal } from "~/store/use-auth-modal";
import { useIsMounted } from "~/hooks/use-is-mounted";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

export function AuthModal() {
  const pathname = usePathname();
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onClose } = useAuthModal();

  const handleClick = useCallback(
    (provider: string) => {
      setIsLoading(true);
      signIn(provider, { callbackUrl: pathname });
    },
    [pathname],
  );

  if (!isMounted) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Sign in</DialogTitle>
          <DialogDescription className="text-center">
            Sign in using one of the below accounts.
          </DialogDescription>
        </DialogHeader>
        <div className="mx-auto space-x-4">
          {isLoading ? (
            <DNA />
          ) : (
            <>
              <Button variant="outline" onClick={() => handleClick("google")}>
                <FcGoogle className="mr-2" />
                Google
              </Button>
              <Button variant="outline" onClick={() => handleClick("github")}>
                <FaGithub className="mr-2" />
                GitHub
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
