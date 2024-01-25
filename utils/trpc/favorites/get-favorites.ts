import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const getFavorites = privateProcedure.query(async ({ ctx }) => {
  const { user } = ctx;

  const favTokens = await db.favorite.findMany({
    where: { userId: user.id },
    include: { nft: true },
    orderBy: {
      nft: { createdAt: "desc" },
    },
  });
  return favTokens;
});
