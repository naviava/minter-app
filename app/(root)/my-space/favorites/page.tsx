"use client";

import { DNA } from "react-loader-spinner";

import { NftCard } from "~/components/nft-card";
import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { CreateButton } from "~/components/create-button";
import { NothingToShow } from "~/components/nothing-to-show";

import { trpc } from "~/app/_trpc/client";

export default function FavoritesPage() {
  const { data: favorites, isLoading } = trpc.favorites.getFavorites.useQuery();

  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Favorites" tagline="All the NFTs you enjoyed" />
        <CreateButton />
      </div>
      {isLoading && (
        <div className="mt-24 flex items-center justify-center">
          <DNA />
        </div>
      )}
      {!isLoading && (!favorites || !favorites.length) && (
        <NothingToShow message="Nothing here yet. Go to the explore section to mark something you like." />
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
