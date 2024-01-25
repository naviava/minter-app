import { router } from "./trpc";

import { nftRouter } from "./routers/nft-router";
import { userRouter } from "./routers/user-router";
import { commentRouter } from "./routers/comment-router";
import { favoritesRouter } from "./routers/favorites-router";

export const appRouter = router({
  nft: nftRouter,
  user: userRouter,
  comment: commentRouter,
  favorites: favoritesRouter,
});

export type AppRouter = typeof appRouter;
