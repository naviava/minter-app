import { router } from "~/server/trpc";

import { addComment } from "~/utils/trpc/comment/add-comment";
import { getCommentCount } from "~/utils/trpc/comment/get-comment-count";

export const commentRouter = router({
  addComment,
  getCommentCount,
});
