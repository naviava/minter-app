"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { TokenArticleHeader } from "./token-article-header";
import { CommentSection } from "./comment-section";

import { serverClient } from "~/app/_trpc/server-client";
import { DNA } from "react-loader-spinner";

interface IToken {
  title: string;
  description: string;
  media: string;
}

interface IProps {
  token: Awaited<ReturnType<typeof serverClient.nft.getTokenById>>;
}

export function TokenArticle({ token }: IProps) {
  const query = useQuery({
    queryKey: ["token", token.tokenHref],
    queryFn: () => fetch(token.tokenHref).then(async (res) => await res.json()),
  });

  const data = query.data as IToken;
  if (!data)
    return (
      <div className="mt-60 flex items-center justify-center">
        <DNA />
      </div>
    );

  return (
    <div className="space-y-8">
      <TokenArticleHeader
        id={token.id}
        title={data.title}
        userName={token.wallet.user.name}
      />
      <div className="relative mx-auto aspect-square w-full max-w-xl">
        <Image
          fill
          src={data.media}
          alt={`Image for ${data.title}`}
          className="object-cover"
        />
      </div>
      <p className="whitespace-pre-wrap break-words">{data.description}</p>
      <CommentSection id={token.id} />
    </div>
  );
}
