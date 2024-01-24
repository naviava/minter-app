import { router } from "~/server/trpc";
import { getOwnedNft } from "~/utils/trpc/nft/get-owned-nft";
import { linkNft } from "~/utils/trpc/nft/link-nft";

export const nftRouter = router({
  linkNft,
  getOwnedNft,
});
