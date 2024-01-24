import { z } from "zod";
import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const isFavorite = privateProcedure
  .input(z.string().min(1, { message: "Token ID is required." }))
  .query(async ({ ctx, input: nftId }) => {
    const { user } = ctx;
    if (!user) {
      return false;
    }

    const existingFavorite = await db.favorite.findUnique({
      where: {
        userId_nftId: {
          userId: user.id,
          nftId,
        },
      },
    });
    return !!existingFavorite;
  });
