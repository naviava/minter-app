import { NftCard } from "~/components/nft-card";
import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { NothingToShow } from "~/components/nothing-to-show";
import { CreateButton } from "./_components/create-button";

import { serverClient } from "~/app/_trpc/server-client";

export default async function MySpacePage() {
  const user = await serverClient.user.getAuthProfile();
  const userTokens = await serverClient.nft.getOwnedNft();

  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Space" tagline="Facts minted by you" />
        <CreateButton />
      </div>
      {!user && (
        <NothingToShow message="You need to be logged in to see your space" />
      )}
      {!userTokens && (
        <NothingToShow message="No tokens linked to your account yet" />
      )}
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {userTokens?.map((token) => (
          <NftCard key={token.id} {...token} isOwner />
        ))}
      </div>
    </PageWrapper>
  );
}
