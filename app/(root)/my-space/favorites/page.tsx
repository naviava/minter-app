"use client";

import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { CreateButton } from "~/components/create-button";
import { NothingToShow } from "~/components/nothing-to-show";

import { NftCard } from "~/components/nft-card";
import { trpc } from "~/app/_trpc/client";

export default function FavoritesPage() {
  const { data: favorites } = trpc.user.getFavorites.useQuery();

  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Favorites" tagline="All the NFTs you enjoyed" />
        <CreateButton />
      </div>
      {(!favorites || !favorites.length) && (
        <NothingToShow message="No tokens linked to your account yet" />
      )}
      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {favorites?.map((fav) => {
          if (!fav.nft.isPublished) return null;
          return (
            <NftCard
              key={fav.nftId}
              id={fav.nftId}
              tokenHref={fav.nft.tokenHref}
            />
          );
        })}
      </div>
    </PageWrapper>
  );
}
