import { CommentModal } from "../modals/comment-modal";
import { AuthModal } from "~/components/modals/auth-modal";
import { ShareModal } from "~/components/modals/share-modal";
import { UploadModal } from "~/components/modals/upload-modal";

export function ModalProvider() {
  return (
    <>
      <AuthModal />
      <ShareModal />
      <UploadModal />
      <CommentModal />
    </>
  );
}
