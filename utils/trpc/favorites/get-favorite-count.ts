import { z } from "zod";

import { db } from "~/lib/db";
import { publicProcedure } from "~/server/trpc";

export const getFavoriteCount = publicProcedure
  .input(z.string().min(1, { message: "Token ID is required." }))
  .query(async ({ input: nftId }) => {
    const favoriteCount = await db.favorite.count({
      where: { nftId },
    });
    return favoriteCount;
  });
