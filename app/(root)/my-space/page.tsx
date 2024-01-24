import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { CreateButton } from "./_components/create-button";
import Image from "next/image";
import { serverClient } from "~/app/_trpc/server-client";

export default async function MySpacePage() {
  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Space" tagline="Facts minted by you" />
        <CreateButton />
      </div>
      <div className="mt-24 space-y-10">
        <div className="relative mx-auto aspect-square w-[250px]">
          <Image
            fill
            src="/nothing-to-show.svg"
            alt="No NFTs linked to this account."
          />
        </div>
        <h2 className="text-balance text-center text-xl font-light text-muted-foreground">
          No tokens linked to your account yet
        </h2>
      </div>
    </PageWrapper>
  );
}
