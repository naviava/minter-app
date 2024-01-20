import { router } from "~/server/trpc";
import { getAuthProfile } from "~/utils/trpc/user/get-auth-profile";
import { linkWallet } from "~/utils/trpc/user/link-wallet";

export const userRouter = router({
  getAuthProfile,
  linkWallet,
});
