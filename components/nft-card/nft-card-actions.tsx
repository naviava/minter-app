"use client";

import { toast } from "sonner";
import { Eye, Share2 } from "lucide-react";
import { RiHeartLine } from "react-icons/ri";

import { useAuthModal } from "~/store/use-auth-modal";
import { useShareModal } from "~/store/use-share-modal";

import { HoverTip } from "~/components/hover-tip";
import { Separator } from "~/components/ui/separator";
import { FavoriteGradientIcon } from "./favorite-gradient-icon";

import { cn } from "~/lib/utils";
import { trpc } from "~/app/_trpc/client";

interface IProps {
  id: string;
}

export function NftCardActions({ id }: IProps) {
  const { onOpen: openAuthModal } = useAuthModal();
  const { onOpen: openShareModal } = useShareModal();

  const utils = trpc.useUtils();
  const { data: user } = trpc.user.getAuthProfile.useQuery();
  const { data: isFavorite } = trpc.favorites.isFavorite.useQuery(id);

  const { mutate: toggleFavorite, isLoading } =
    trpc.favorites.toggleFavorite.useMutation({
      onError: ({ message }) => toast.error(message),
      onSuccess: ({ message }) => {
        utils.favorites.invalidate();
        toast.success(message);
      },
    });

  function handleToggleFavorite() {
    if (!user) return openAuthModal();
    toggleFavorite(id);
  }

  return (
    <div className="flex items-center gap-x-2">
      <HoverTip
        message={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="flex-1"
      >
        <div
          role="button"
          onClick={handleToggleFavorite}
          className={cn(
            "flex items-center justify-center transition",
            !isFavorite && "hover:opacity-70",
          )}
        >
          <button disabled={isLoading}>
            {isFavorite ? (
              <FavoriteGradientIcon />
            ) : (
              <RiHeartLine className="h-[22px] w-[22px]" />
            )}
          </button>
        </div>
      </HoverTip>
      <Separator orientation="vertical" className="h-6" />
      <HoverTip message="View this token" className="flex-1">
        <a
          href={`/nft/${id}`}
          target="_blank"
          className="flex items-center justify-center transition hover:opacity-70"
        >
          <Eye className="h-[22px] w-[22px]" />
        </a>
      </HoverTip>
      <Separator orientation="vertical" className="h-6" />
      <HoverTip message="Share" className="flex-1">
        <div
          role="button"
          onClick={() =>
            openShareModal(`${process.env.NEXT_PUBLIC_SITE_URL}/nft/${id}`)
          }
          className="flex items-center justify-center transition hover:opacity-70"
        >
          <Share2 className="h-[22px] w-[22px]" />
        </div>
      </HoverTip>
    </div>
  );
}
