import { z } from "zod";
import { db } from "~/lib/db";
import { publicProcedure } from "~/server/trpc";

export const getComments = publicProcedure
  .input(z.string().min(1, { message: "Token ID is required." }))
  .query(async ({ input: nftId }) => {
    const comments = await db.comment.findMany({
      where: { nftId },
      include: { user: true },
    });
    return comments;
  });
