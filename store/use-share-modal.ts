import { create } from "zustand";

type ShareModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useShareModal = create<ShareModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
