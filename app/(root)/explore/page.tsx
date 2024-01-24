import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { CreateButton } from "~/components/create-button";
import { serverClient } from "~/app/_trpc/server-client";
import { NothingToShow } from "~/components/nothing-to-show";
import { NftCard } from "~/components/nft-card";

export default async function ExplorePage() {
  const publishedTokens = await serverClient.nft.getPublishedTokens();

  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="Explore" tagline="See what others are doing" />
        <CreateButton />
      </div>
      {!publishedTokens.length && (
        <NothingToShow message="We couldn't find anything to show you!" />
      )}
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {publishedTokens.map((token) => (
          <NftCard key={token.id} {...token} />
        ))}
      </div>
    </PageWrapper>
  );
}
