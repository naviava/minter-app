import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { CreateButton } from "~/components/create-button";
import { NothingToShow } from "~/components/nothing-to-show";

import { serverClient } from "~/app/_trpc/server-client";

export default async function FavoritesPage() {
  const favorites = await serverClient.user.getFavorites();

  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Favorites" tagline="All the NFTs you enjoyed" />
        <CreateButton />
      </div>
      {!favorites.length && (
        <NothingToShow message="No tokens linked to your account yet" />
      )}
    </PageWrapper>
  );
}
