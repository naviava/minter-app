import { PageHeading } from "~/components/page-heading";
import { PageWrapper } from "~/components/page-wrapper";
import { serverClient } from "~/app/_trpc/server-client";
import { TokenTitle } from "./_components/token-title";

interface IProps {
  params: {
    tokenId: string;
  };
}

export default async function TokenIdPage({ params }: IProps) {
  const token = await serverClient.nft.getTokenById(params.tokenId);

  return (
    <PageWrapper>
      <TokenTitle tokenHref={token.tokenHref} />
    </PageWrapper>
  );
}
