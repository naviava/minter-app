"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { toast } from "sonner";
import { useMbWallet } from "@mintbase-js/react";

import { useIsMounted } from "~/hooks/use-is-mounted";
import { uploadReference } from "@mintbase-js/storage";
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

import { trpc } from "~/app/_trpc/client";
import { Loader } from "lucide-react";

export function UploadModal() {
  const router = useRouter();
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = useState(false);

  const { activeAccountId } = useMbWallet();
  const { isOpen, title, description, media, clearInputs, onClose } =
    useUploadModal();

  const utils = trpc.useUtils();
  const { mutate: handleLinkNft } = trpc.nft.linkNft.useMutation({
    onError: ({ message }) => toast.error(message),
    onSuccess: () => {
      utils.nft.invalidate();
      toast.success("NFT Created and linked to your account");
      router.push("/my-space");
      clearInputs();
    },
  });

  const handleUpload = useCallback(async () => {
    if (!title || !description || !media || !activeAccountId) return;
    try {
      setIsLoading(true);
      const metadata = { title, description, media };
      const uploadResult = await uploadReference(metadata);
      const tokenHref = `https://arweave.net/${uploadResult.id}`;
      handleLinkNft({ tokenHref, walletId: activeAccountId });
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
      setIsLoading(false);
    }
  }, [title, description, media, activeAccountId, handleLinkNft, onClose]);

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
          <div className="line-clamp-3 break-all text-xl font-medium">
            {title}
          </div>
        </div>
        <ScrollArea className="h-72 grow-0 whitespace-pre-wrap break-all">
          {description}
        </ScrollArea>
        <DialogFooter>
          <div className="flex w-full gap-x-2">
            <Button
              variant="outline"
              size="sm"
              disabled={isLoading}
              onClick={onClose}
              className="w-full"
            >
              Cancel
            </Button>
            <Button
              variant="theme"
              size="sm"
              disabled={isLoading}
              onClick={handleUpload}
              className="w-full"
            >
              {isLoading ? (
                <Loader className="ml-2 h-4 w-4 animate-spin" />
              ) : (
                "Confirm"
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
