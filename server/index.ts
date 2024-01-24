import { router } from "./trpc";

import { nftRouter } from "./routers/nft-router";
import { userRouter } from "./routers/user-router";

export const appRouter = router({
  user: userRouter,
  nft: nftRouter,
});

export type AppRouter = typeof appRouter;
