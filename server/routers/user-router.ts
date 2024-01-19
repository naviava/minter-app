import { router } from "~/server/trpc";
import { getAuthProfile } from "~/utils/trpc/user/get-auth-profile";

export const userRouter = router({
  getAuthProfile,
});
