import { db } from "~/lib/db";
import { TRPCError } from "@trpc/server";
import { privateProcedure } from "~/server/trpc";

export const getOwnedNft = privateProcedure.query(async ({ ctx }) => {
  const { user } = ctx;
  if (!user) {
    return null;
  }

  const userTokens = await db.wallet.findFirst({
    where: {
      userId: user.id,
    },
    include: {
      nft: {
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!userTokens) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "User not found",
    });
  }
  return userTokens.nft;
});
