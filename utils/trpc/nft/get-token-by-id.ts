import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "~/lib/db";
import { publicProcedure } from "~/server/trpc";

export const getTokenById = publicProcedure
  .input(z.string().min(1, { message: "Token ID is required." }))
  .query(async ({ input: tokenId }) => {
    const existingToken = await db.nft.findUnique({
      where: { id: tokenId },
      include: {
        wallet: {
          include: { user: true },
        },
      },
    });
    if (!existingToken) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Token not found.",
      });
    }
    return existingToken;
  });
