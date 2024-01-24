import { PageHeading } from "~/components/page-heading";
import { PageWrapper } from "~/components/page-wrapper";
import { CreateButton } from "~/components/create-button";
import { serverClient } from "~/app/_trpc/server-client";

export default async function FavoritesPage() {
  const favorites = await serverClient.user.getFavorites();

  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Favorites" tagline="All the NFTs you enjoyed" />
        <CreateButton />
      </div>
    </PageWrapper>
  );
}
