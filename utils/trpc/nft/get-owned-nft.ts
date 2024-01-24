import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const getOwnedNft = privateProcedure
  .input(z.string())
  .query(async ({ ctx, input: walletId }) => {
    const { user } = ctx;
    if (!user) {
      return null;
    }

    const userTokens = await db.wallet.findUnique({
      where: {
        userId: user.id,
        walletId,
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
