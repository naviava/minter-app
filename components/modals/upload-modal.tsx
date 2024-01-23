"use client";

import { useIsMounted } from "~/hooks/use-is-mounted";
import { useUploadModal } from "~/store/use-upload-modal";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "~/components/ui/dialog";

export function UploadModal() {
  const isMounted = useIsMounted();
  const { isOpen, title, description, media, clearInputs, onClose } =
    useUploadModal();

  if (!isMounted) return null;
  return (
    <Dialog open={false} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Preview your NFT</DialogTitle>
          <DialogDescription className="text-balance text-center">
            This action is irreversible, so please confirm that you&apos;re
            happy with the details below.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
