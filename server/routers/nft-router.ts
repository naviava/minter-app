import { router } from "~/server/trpc";
import { linkNft } from "~/utils/trpc/nft/link-nft";

export const nftRouter = router({
  linkNft,
});
