import { router } from "~/server/trpc";
import { getOwnedNft } from "~/utils/trpc/nft/get-owned-nft";
import { linkNft } from "~/utils/trpc/nft/link-nft";
import { toggleVisibility } from "~/utils/trpc/nft/toggle-visibility";

export const nftRouter = router({
  linkNft,
  getOwnedNft,
  toggleVisibility,
});
