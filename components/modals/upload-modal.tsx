"use client";

import { useCallback } from "react";
import Image from "next/image";

import { uploadReference } from "@mintbase-js/storage";
import { useIsMounted } from "~/hooks/use-is-mounted";
import { useUploadModal } from "~/store/use-upload-modal";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";

export function UploadModal() {
  const isMounted = useIsMounted();
  const { isOpen, title, description, media, clearInputs, onClose } =
    useUploadModal();

  const handleUpload = useCallback(async () => {
    if (!title || !description || !media) return;
    const metadata = { title, description, media };
    const uploadResult = await uploadReference(metadata);
    // TODO: Handle uploadResult
  }, [title, description, media]);

  if (!isMounted) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Preview your NFT</DialogTitle>
          <DialogDescription className="text-balance text-center">
            This action is irreversible, so please confirm that you&apos;re
            happy with the details below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex h-[100px] items-center gap-x-2">
          {media && (
            <div className="aspect relative aspect-square w-[100px] shrink-0">
              <Image fill src={URL.createObjectURL(media)} alt="NFT Image" />
            </div>
          )}
          <div className="line-clamp-3 text-xl font-medium">{title}</div>
        </div>
        <ScrollArea className="h-72 whitespace-pre-wrap">
          {description}
        </ScrollArea>
        <DialogFooter>
          <div className="flex w-full gap-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-full"
            >
              Cancel
            </Button>
            <Button variant="theme" size="sm" className="w-full">
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
