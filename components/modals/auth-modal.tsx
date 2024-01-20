"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useAuthModal } from "~/store/use-auth-modal";
import { useIsMounted } from "~/hooks/use-is-mounted";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { signIn } from "next-auth/react";

export function AuthModal() {
  const isMounted = useIsMounted();
  const { isOpen, onClose } = useAuthModal();

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
          <Button variant="outline" onClick={() => signIn("google")}>
            <FcGoogle className="mr-2" />
            Google
          </Button>
          <Button variant="outline" onClick={() => signIn("github")}>
            <FaGithub className="mr-2" />
            GitHub
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
