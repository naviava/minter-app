"use client";

import { useCallback } from "react";
import Image from "next/image";

import { toast } from "sonner";
import { Share2 } from "lucide-react";
import { RiHeartLine } from "react-icons/ri";

import { useQuery } from "@tanstack/react-query";
import { useAuthModal } from "~/store/use-auth-modal";
import { useShareModal } from "~/store/use-share-modal";

import { Button } from "~/components/ui/button";
import { HoverTip } from "~/components/hover-tip";
import { PageHeading } from "~/components/page-heading";
import { FavoriteGradientIcon } from "~/components/nft-card/favorite-gradient-icon";

import { trpc } from "~/app/_trpc/client";
import { serverClient } from "~/app/_trpc/server-client";

interface IToken {
  title: string;
  description: string;
  media: string;
}

interface IProps {
  token: Awaited<ReturnType<typeof serverClient.nft.getTokenById>>;
}

export function TokenArticle({ token }: IProps) {
  const { onOpen: openAuthModal } = useAuthModal();
  const { onOpen: openShareModal } = useShareModal();
  const { data: user } = trpc.user.getAuthProfile.useQuery();

  const query = useQuery({
    queryKey: ["token", token.tokenHref],
    queryFn: () => fetch(token.tokenHref).then(async (res) => await res.json()),
  });

  const utils = trpc.useUtils();
  const { data: isFavorite } = trpc.user.isFavorite.useQuery(token.id);
  const { mutate: toggleFavorite } = trpc.user.toggleFavorite.useMutation({
    onError: ({ message }) => toast.error(message),
    onSuccess: ({ message }) => {
      utils.user.getFavorites.invalidate();
      utils.user.isFavorite.invalidate(token.id);
      toast.success(message);
    },
  });

  const handleToggleFavorite = useCallback(() => {
    if (!user) return openAuthModal();
    toggleFavorite(token.id);
  }, [token.id, user, openAuthModal, toggleFavorite]);

  const data = query.data as IToken;
  if (!data) return null;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-x-4">
        <PageHeading
          label={data.title}
          tagline={`Created by ${token.wallet.user.name ? token.wallet.user.name : "Anonymous"}`}
        />
        <div className="flex items-start gap-x-1">
          <HoverTip
            message={isFavorite ? "Remove from favorites" : "Add to favorites"}
            side="top"
            sideOffset={0}
          >
            <Button
              variant="link"
              size="sm"
              onClick={handleToggleFavorite}
              className="px-2"
            >
              {isFavorite ? (
                <FavoriteGradientIcon />
              ) : (
                <RiHeartLine className="h-[22px] w-[22px]" />
              )}
            </Button>
          </HoverTip>
          <HoverTip message="Share" side="top" sideOffset={0}>
            <Button
              variant="link"
              size="sm"
              onClick={() =>
                openShareModal(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/nft/${token.id}`,
                )
              }
              className="px-2"
            >
              <Share2 className="h-[22px] w-[22px]" />
            </Button>
          </HoverTip>
        </div>
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-xl">
        <Image
          fill
          src={data.media}
          alt={`Image for ${data.title}`}
          className="object-cover"
        />
      </div>
      <p className="whitespace-pre-wrap">{data.description}</p>
    </div>
  );
}
