"use client";

import { Comment } from "./comment";
import { trpc } from "~/app/_trpc/client";

interface IProps {
  id: string;
}

export function TokenArticleComments({ id }: IProps) {
  const { data: comments } = trpc.comment.getComments.useQuery(id);
  const { data: commentCount } = trpc.comment.getCommentCount.useQuery(id);

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">
        Comments
        {!!commentCount && <span className="ml-2">{`(${commentCount})`}</span>}
      </h2>
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
