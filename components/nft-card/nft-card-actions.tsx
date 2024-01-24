"use client";

import { toast } from "sonner";
import { RiHeartLine } from "react-icons/ri";
import { ExternalLink, Eye } from "lucide-react";

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
  const { data: isFavorite } = trpc.user.isFavorite.useQuery(id);

  const { mutate: toggleFavorite } = trpc.user.toggleFavorite.useMutation({
    onError: ({ message }) => toast.error(message),
    onSuccess: ({ message }) => {
      utils.user.getFavorites.invalidate();
      utils.user.isFavorite.invalidate(id);
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
          {isFavorite ? (
            <FavoriteGradientIcon />
          ) : (
            <RiHeartLine className="h-[22px] w-[22px]" />
          )}
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
          <ExternalLink className="h-[22px] w-[22px]" />
        </div>
      </HoverTip>
    </div>
  );
}
