import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const deleteComment = privateProcedure
  .input(z.string().min(1, { message: "Comment ID is required." }))
  .mutation(async ({ ctx, input: id }) => {
    const { user } = ctx;

    const existingComment = await db.comment.findUnique({
      where: { id },
      select: { userId: true },
    });
    if (!existingComment) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Comment not found.",
      });
    }
    if (existingComment.userId !== user.id) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You are not authorized to delete this comment.",
      });
    }

    await db.comment.delete({
      where: { id },
    });
    return { message: "Comment deleted." };
  });
