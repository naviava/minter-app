"use client";

import { useQuery } from "@tanstack/react-query";

import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { ToggleVisibilityWidget } from "./toggle-visibility-widget";
import { NftCardActions } from "./nft-card-actions";
import { TokenDetails } from "./token-details";

interface IProps {
  id: string;
  tokenHref: string;
  isPublished?: boolean;
  walletId?: string;
  isOwner?: boolean;
}

interface IToken {
  title: string;
  description: string;
  media: string;
}

export function NftCard({
  id,
  tokenHref,
  walletId,
  isPublished,
  isOwner,
}: IProps) {
  const query = useQuery({
    queryKey: ["userToken", tokenHref],
    queryFn: () => fetch(tokenHref).then(async (res) => await res.json()),
  });

  const data = query.data as IToken;
  if (!data) return null;

  return (
    <Card className="rounded-sm bg-white/50 p-4 shadow-lg dark:bg-black/50">
      <TokenDetails {...data} id={id} walletId={walletId} isOwner={isOwner} />
      {isOwner && isPublished !== undefined && (
        <ToggleVisibilityWidget id={id} isPublished={isPublished} />
      )}
      <Separator className="my-2" />
      <NftCardActions id={id} />
    </Card>
  );
}
