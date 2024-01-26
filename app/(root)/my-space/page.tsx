"use client";

import { DNA } from "react-loader-spinner";

import { NftCard } from "~/components/nft-card";
import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { CreateButton } from "~/components/create-button";
import { NothingToShow } from "~/components/nothing-to-show";

import { trpc } from "~/app/_trpc/client";

export default function MySpacePage() {
  const { data: userTokens, isLoading } = trpc.nft.getOwnedNft.useQuery();

  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Space" tagline="Facts minted by you" />
        <CreateButton />
      </div>
      {isLoading && (
        <div className="mt-24 flex items-center justify-center">
          <DNA />
        </div>
      )}
      {!isLoading && (!userTokens || !userTokens.length) && (
        <NothingToShow message="No tokens linked to your account yet" />
      )}
      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {userTokens?.map((token) => (
          <NftCard key={token.id} {...token} isOwner />
        ))}
      </div>
    </PageWrapper>
  );
}
