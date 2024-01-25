import { useCommentModal } from "~/store/use-comment-modal";

export function CommentForm() {
  const { id } = useCommentModal();

  return <div>{id}</div>;
}
