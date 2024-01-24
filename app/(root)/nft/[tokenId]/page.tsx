import { PageWrapper } from "~/components/page-wrapper";
import { serverClient } from "~/app/_trpc/server-client";
import { TokenArticle } from "./_components/token-article";

interface IProps {
  params: {
    tokenId: string;
  };
}

export default async function TokenIdPage({ params }: IProps) {
  const token = await serverClient.nft.getTokenById(params.tokenId);

  return (
    <PageWrapper>
      <TokenArticle token={token} />
    </PageWrapper>
  );
}
