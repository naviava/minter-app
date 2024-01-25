import { router } from "~/server/trpc";
import { addComment } from "~/utils/trpc/comment/add-comment";

export const commentRouter = router({
  addComment,
});
