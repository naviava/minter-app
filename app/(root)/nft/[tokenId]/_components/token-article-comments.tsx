"use client";

import { trpc } from "~/app/_trpc/client";
import { Comment } from "./comment";

interface IProps {
  id: string;
}

export function TokenArticleComments({ id }: IProps) {
  const { data: comments } = trpc.comment.getComments.useQuery(id);
  const { data: commentCount } = trpc.comment.getCommentCount.useQuery(id);

  if (!comments || !comments.length || !commentCount)
    return (
      <div className="space-y-1 text-balance text-center italic text-muted-foreground">
        <p>No comments yet.</p>
        <p>Be the first to comment on this NFT.</p>
      </div>
    );

  return (
    <section>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          text={comment.text}
          authorName={comment.user.name || ""}
          authorAvatar={comment.user.image || ""}
          createdAt={comment.createdAt}
        />
      ))}
    </section>
  );
}
