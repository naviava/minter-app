import { useCallback } from "react";

import { toast } from "sonner";
import { Share2 } from "lucide-react";
import { RiHeartLine } from "react-icons/ri";

import { useAuthModal } from "~/store/use-auth-modal";
import { useShareModal } from "~/store/use-share-modal";

import { Button } from "~/components/ui/button";
import { HoverTip } from "~/components/hover-tip";
import { PageHeading } from "~/components/page-heading";
import { FavoriteGradientIcon } from "~/components/nft-card/favorite-gradient-icon";

import { trpc } from "~/app/_trpc/client";

interface IProps {
  id: string;
  title: string;
  userName: string | null;
}

export function TokenArticleHeader({ id, title, userName }: IProps) {
  const { onOpen: openAuthModal } = useAuthModal();
  const { onOpen: openShareModal } = useShareModal();
  const { data: user } = trpc.user.getAuthProfile.useQuery();

  const utils = trpc.useUtils();
  const { data: isFavorite } = trpc.favorites.isFavorite.useQuery(id);
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
    <div className="flex items-start justify-between gap-x-4">
      <PageHeading
        label={title}
        tagline={`Created by ${userName ? userName : "Anonymous"}`}
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
              openShareModal(`${process.env.NEXT_PUBLIC_SITE_URL}/nft/${id}`)
            }
            className="px-2"
          >
            <Share2 className="h-[22px] w-[22px]" />
          </Button>
        </HoverTip>
      </div>
    </div>
  );
}
