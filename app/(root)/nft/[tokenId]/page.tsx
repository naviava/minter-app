import { redirect } from "next/navigation";

import { PageWrapper } from "~/components/page-wrapper";
import { TokenArticle } from "./_components/token-article";

import { serverClient } from "~/app/_trpc/server-client";

interface IProps {
  params: {
    tokenId: string;
  };
}

export default async function TokenIdPage({ params }: IProps) {
  const token = await serverClient.nft.getTokenById(params.tokenId);
  if (!token.isPublished) return redirect("/explore");

  return (
    <PageWrapper>
      <TokenArticle token={token} />
    </PageWrapper>
  );
}
