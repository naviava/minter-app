import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const addComment = privateProcedure
  .input(
    z.object({
      id: z.string().min(1, { message: "Token ID is required." }),
      text: z.string().min(1, { message: "Comment text cannot be empty." }),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { user } = ctx;

    const existingToken = await db.nft.findUnique({
      where: { id: input.id },
    });
    if (!existingToken) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Token not found!",
      });
    }

    const newComment = db.comment.create({
      data: {
        text: input.text,
        userId: user.id,
        nftId: input.id,
      },
    });
    return newComment;
  });
