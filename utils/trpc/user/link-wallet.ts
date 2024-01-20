import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const linkWallet = privateProcedure
  .input(z.string())
  .mutation(async ({ ctx, input }) => {
    const { user } = ctx;
    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to link a wallet",
      });
    }

    const existingWallet = await db.wallet.findUnique({
      where: {
        walletId: input,
      },
    });
    if (!!existingWallet && existingWallet.userId !== user.id) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "This wallet is already linked to another account",
      });
    }
    if (!!existingWallet && existingWallet.userId === user.id) {
      return existingWallet;
    }

    const newWallet = await db.wallet.create({
      data: {
        walletId: input,
        userId: user.id,
      },
    });
    return newWallet;
  });
