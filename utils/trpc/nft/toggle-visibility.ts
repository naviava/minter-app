import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const toggleVisibility = privateProcedure
  .input(z.string())
  .mutation(async ({ ctx, input }) => {
    const { user } = ctx;
    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to perform that action.",
      });
    }

    const existingToken = await db.nft.findUnique({
      where: {
        id: input,
      },
      include: { wallet: true },
    });
    if (!existingToken) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That token does not exist.",
      });
    }
    if (existingToken.wallet.userId !== user.id) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not own that token.",
      });
    }
    const updatedToken = await db.nft.update({
      where: { id: existingToken.id },
      data: { isPublished: !existingToken.isPublished },
    });

    return updatedToken.isPublished;
  });
