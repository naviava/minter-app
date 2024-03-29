"use client";

import { useCallback } from "react";

import { toast } from "sonner";
import { RiHeartLine } from "react-icons/ri";
import { MessageSquare, Share2 } from "lucide-react";

import { useAuthModal } from "~/store/use-auth-modal";
import { useShareModal } from "~/store/use-share-modal";
import { useCommentModal } from "~/store/use-comment-modal";

import { Button } from "~/components/ui/button";
import { HoverTip } from "~/components/hover-tip";
import { FavoriteGradientIcon } from "~/components/nft-card/favorite-gradient-icon";
import { TokenArticleComments } from "./token-article-comments";

import { trpc } from "~/app/_trpc/client";

interface IProps {
  id: string;
}

export function CommentSection({ id }: IProps) {
  const { onOpen: openAuthModal } = useAuthModal();
  const { onOpen: openShareModal } = useShareModal();
  const { onOpen: openCommentModal } = useCommentModal();

  const { data: user } = trpc.user.getAuthProfile.useQuery();
  const { data: isFavorite } = trpc.favorites.isFavorite.useQuery(id);
  const { data: favCount } = trpc.favorites.getFavoriteCount.useQuery(id);
  const { data: commentCount } = trpc.comment.getCommentCount.useQuery(id);

  const utils = trpc.useUtils();
  const { mutate: toggleFavorite, isLoading } =
    trpc.favorites.toggleFavorite.useMutation({
      onError: ({ message }) => toast.error(message),
      onSuccess: ({ message }) => {
        utils.favorites.invalidate();
        toast.success(message);
      },
    });

  const handleToggleFavorite = useCallback(() => {
    if (!user) return openAuthModal();
    toggleFavorite(id);
  }, [id, user, openAuthModal, toggleFavorite]);

  const handleAddComment = useCallback(() => {
    if (!user) return openAuthModal();
    openCommentModal(id);
  }, [id, user, openAuthModal, openCommentModal]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <HoverTip
            message={isFavorite ? "Remove from favorites" : "Add to favorites"}
            side="top"
            sideOffset={0}
          >
            <Button
              variant="link"
              size="sm"
              disabled={isLoading}
              onClick={handleToggleFavorite}
            >
              {isFavorite ? (
                <FavoriteGradientIcon />
              ) : (
                <RiHeartLine className="h-[22px] w-[22px]" />
              )}
              <span className="ml-2">{favCount}</span>
            </Button>
          </HoverTip>
          <HoverTip message="Leave a comment" side="top" sideOffset={0}>
            <Button variant="link" size="sm" onClick={handleAddComment}>
              <MessageSquare className="h-[22px] w-[22px]" />
              <span className="ml-2">{commentCount}</span>
            </Button>
          </HoverTip>
        </div>
        <HoverTip message="Share" side="top" sideOffset={0}>
          <Button
            variant="link"
            size="sm"
            onClick={() =>
              openShareModal(`${process.env.NEXT_PUBLIC_SITE_URL}/nft/${id}`)
            }
            className="px-2"
          >
            <Share2 className="h-[22px] w-[22px]" />
          </Button>
        </HoverTip>
      </div>
      <TokenArticleComments id={id} />
    </div>
  );
}
