import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const toggleFavorite = privateProcedure
  .input(z.string().min(1, { message: "Token ID is required." }))
  .mutation(async ({ ctx, input: nftId }) => {
    const { user } = ctx;
    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to perform this action.",
      });
    }

    const existingToken = await db.nft.findUnique({
      where: { id: nftId },
    });
    if (!existingToken) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That token does not exist.",
      });
    }

    const existingFavorite = await db.favorite.findUnique({
      where: {
        userId_nftId: {
          userId: user.id,
          nftId: nftId,
        },
      },
    });
    if (!!existingFavorite) {
      await db.favorite.delete({
        where: {
          userId_nftId: {
            userId: user.id,
            nftId: nftId,
          },
        },
      });
      return { message: "Removed from favorites" };
    }

    await db.favorite.create({
      data: {
        userId: user.id,
        nftId: nftId,
      },
    });
    return { message: "Added to favorites" };
  });
