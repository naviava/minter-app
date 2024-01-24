"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

import { useIsMounted } from "~/hooks/use-is-mounted";
import { useShareModal } from "~/store/use-share-modal";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

export function ShareModal() {
  const isMounted = useIsMounted();
  const { isOpen, onClose } = useShareModal();

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
        <div className=""></div>
      </DialogContent>
    </Dialog>
  );
}
