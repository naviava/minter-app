"use client";

import { useCallback } from "react";
import { PlusCircle } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Comment } from "./comment";

import { trpc } from "~/app/_trpc/client";
import { useAuthModal } from "~/store/use-auth-modal";
import { useCommentModal } from "~/store/use-comment-modal";

interface IProps {
  id: string;
}

export function TokenArticleComments({ id }: IProps) {
  const { onOpen: openAuthModal } = useAuthModal();
  const { onOpen: openCommentModal } = useCommentModal();

  const { data: user } = trpc.user.getAuthProfile.useQuery();
  const { data: comments } = trpc.comment.getComments.useQuery(id);
  const { data: commentCount } = trpc.comment.getCommentCount.useQuery(id);

  const handleAddComment = useCallback(() => {
    if (!user) return openAuthModal();
    openCommentModal(id);
  }, [id, user, openAuthModal, openCommentModal]);

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">
          Comments
          {!!commentCount && (
            <span className="ml-2">{`(${commentCount})`}</span>
          )}
        </h2>
        <Button variant="ghost" onClick={handleAddComment}>
          <PlusCircle className="mr-2 h-4 w-4" />
          <span className="md:hidden">Add</span>
          <span className="hidden md:inline-block">Leave a comment</span>
        </Button>
      </div>
      {(!comments || !comments.length || !commentCount) && (
        <div className="space-y-1 text-balance text-center italic text-muted-foreground">
          <p>No comments yet.</p>
          <p>Be the first to comment on this NFT.</p>
        </div>
      )}
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          text={comment.text}
          commentId={comment.id}
          authorId={comment.user.id}
          authorName={comment.user.name || ""}
          authorAvatar={comment.user.image || ""}
          createdAt={comment.createdAt}
        />
      ))}
    </section>
  );
}
