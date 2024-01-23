import { AuthModal } from "~/components/modals/auth-modal";
import { UploadModal } from "~/components/modals/upload-modal";

export function ModalProvider() {
  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}
