import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { db } from "~/lib/db";
import { privateProcedure } from "~/server/trpc";

export const linkNft = privateProcedure
  .input(
    z.object({
      walletId: z.string().min(1, { message: "Wallet ID is required." }),
      tokenHref: z.string().min(1, { message: "Token ID is required." }),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { user } = ctx;
    const { walletId, tokenHref } = input;

    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to perform this action",
      });
    }

    const existingWallet = await db.wallet.findUnique({
      where: { walletId: walletId },
    });
    if (!existingWallet) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "This wallet is not linked to any account",
      });
    }

    const existingNft = await db.nft.findUnique({
      where: { tokenHref },
      include: {
        wallet: {
          select: { userId: true },
        },
      },
    });
    if (!!existingNft && existingNft.wallet.userId !== user.id) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "This NFT is already linked to another account",
      });
    }
    if (!!existingNft) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "This NFT is already linked to your account",
      });
    }

    const newNft = await db.nft.create({
      data: {
        tokenHref,
        walletId: walletId,
      },
    });
    return newNft;
  });
