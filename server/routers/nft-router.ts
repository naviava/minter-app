import { router } from "~/server/trpc";

import { linkNft } from "~/utils/trpc/nft/link-nft";
import { getOwnedNft } from "~/utils/trpc/nft/get-owned-nft";
import { toggleVisibility } from "~/utils/trpc/nft/toggle-visibility";
import { getPublishedTokens } from "~/utils/trpc/nft/get-published-tokens";

export const nftRouter = router({
  linkNft,
  getOwnedNft,
  toggleVisibility,
  getPublishedTokens,
});
