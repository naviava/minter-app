import { z } from "zod";
import { db } from "~/lib/db";
import { publicProcedure } from "~/server/trpc";

export const getCommentCount = publicProcedure
  .input(z.string().min(1, { message: "Token ID is required." }))
  .query(async ({ input: nftId }) => {
    const commentCount = await db.comment.count({
      where: { nftId },
    });
    return commentCount;
  });
