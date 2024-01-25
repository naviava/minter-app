"use client";

import { trpc } from "~/app/_trpc/client";

interface IProps {
  id: string;
}

export function TokenArticleComments({ id }: IProps) {
  const { data: commentCount } = trpc.comment.getCommentCount.useQuery(id);

  if (!commentCount)
    return (
      <div className="space-y-1 text-balance text-center italic text-muted-foreground">
        <p>No comments yet.</p>
        <p>Be the first to comment on this NFT.</p>
      </div>
    );

  return <div>TokenArticleComments</div>;
}
