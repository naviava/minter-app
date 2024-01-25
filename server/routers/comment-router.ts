import { router } from "~/server/trpc";

import { addComment } from "~/utils/trpc/comment/add-comment";
import { getComments } from "~/utils/trpc/comment/get-comments";
import { getCommentCount } from "~/utils/trpc/comment/get-comment-count";

export const commentRouter = router({
  addComment,
  getComments,
  getCommentCount,
});
