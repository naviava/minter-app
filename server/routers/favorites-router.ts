import { router } from "~/server/trpc";

import { isFavorite } from "~/utils/trpc/favorites/is-favorite";
import { getFavorites } from "~/utils/trpc/favorites/get-favorites";
import { toggleFavorite } from "~/utils/trpc/favorites/toggle-favorite";
import { getFavoriteCount } from "~/utils/trpc/favorites/get-favorite-count";

export const favoritesRouter = router({
  isFavorite,
  getFavorites,
  toggleFavorite,
  getFavoriteCount,
});
