import { db } from "~/lib/db";
import { publicProcedure } from "~/server/trpc";

export const getPublishedTokens = publicProcedure.query(async () => {
  const publishedTokens = await db.nft.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
  });
  return publishedTokens;
});
