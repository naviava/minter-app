import { router } from "~/server/trpc";

import { linkWallet } from "~/utils/trpc/user/link-wallet";
import { isFavorite } from "~/utils/trpc/user/is-favorite";
import { toggleFavorite } from "~/utils/trpc/user/toggle-favorite";
import { getAuthProfile } from "~/utils/trpc/user/get-auth-profile";
import { getFavorites } from "~/utils/trpc/user/get-favorites";

export const userRouter = router({
  getAuthProfile,
  linkWallet,
  isFavorite,
  getFavorites,
  toggleFavorite,
});
