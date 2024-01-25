import { router } from "~/server/trpc";

import { linkWallet } from "~/utils/trpc/user/link-wallet";
import { getAuthProfile } from "~/utils/trpc/user/get-auth-profile";

export const userRouter = router({
  getAuthProfile,
  linkWallet,
});
