"use client";

import { DNA } from "react-loader-spinner";

import { NftCard } from "~/components/nft-card";
import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { CreateButton } from "~/components/create-button";
import { NothingToShow } from "~/components/nothing-to-show";

import { trpc } from "~/app/_trpc/client";

export default function ExplorePage() {
  const { data: publishedTokens, isLoading } =
    trpc.nft.getPublishedTokens.useQuery();

  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="Explore" tagline="See what others are doing" />
        <CreateButton />
      </div>
      {isLoading && (
        <div className="mt-24 flex items-center justify-center">
          <DNA />
        </div>
      )}
      {!isLoading && (!publishedTokens || !publishedTokens.length) && (
        <NothingToShow message="We couldn't find anything to show you!" />
      )}
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {publishedTokens?.map((token) => <NftCard key={token.id} {...token} />)}
      </div>
    </PageWrapper>
  );
}
