"use client";

import { useCallback } from "react";

import { toast } from "sonner";
import { RiHeartLine } from "react-icons/ri";

import { Button } from "~/components/ui/button";
import { FavoriteGradientIcon } from "~/components/nft-card/favorite-gradient-icon";

import { trpc } from "~/app/_trpc/client";
import { useAuthModal } from "~/store/use-auth-modal";

interface IProps {
  id: string;
}

export function CommentSection({ id }: IProps) {
  const { onOpen: openAuthModal } = useAuthModal();

  const { data: user } = trpc.user.getAuthProfile.useQuery();
  const { data: isFavorite } = trpc.favorites.isFavorite.useQuery(id);
  const { data: favCount } = trpc.favorites.getFavoriteCount.useQuery(id);

  const utils = trpc.useUtils();
  const { mutate: toggleFavorite } = trpc.favorites.toggleFavorite.useMutation({
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

  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Button variant="link" size="sm" onClick={handleToggleFavorite}>
          {isFavorite ? (
            <FavoriteGradientIcon />
          ) : (
            <RiHeartLine className="h-[22px] w-[22px]" />
          )}
          <span className="ml-1">{favCount}</span>
        </Button>
      </div>
    </div>
  );
}
