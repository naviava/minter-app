"use client";

import { useIsMounted } from "~/hooks/use-is-mounted";
import { useCommentModal } from "~/store/use-comment-modal";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { CommentForm } from "~/components/comment-form";

export function CommentModal() {
  const isMounted = useIsMounted();
  const { isOpen, onClose } = useCommentModal();

  if (!isMounted) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Leave a Comment</DialogTitle>
          <DialogDescription className="text-balance text-center">
            Share your thoughts about the NFT by writing a comment below.
          </DialogDescription>
        </DialogHeader>
        <CommentForm />
      </DialogContent>
    </Dialog>
  );
}
