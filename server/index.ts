import { router } from "./trpc";

import { nftRouter } from "./routers/nft-router";
import { userRouter } from "./routers/user-router";
import { favoritesRouter } from "./routers/favorites-router";

export const appRouter = router({
  user: userRouter,
  nft: nftRouter,
  favorites: favoritesRouter,
});

export type AppRouter = typeof appRouter;
