import { create } from "zustand";

type ShareModalStore = {
  href: string;
  isOpen: boolean;
  onOpen: (href: string) => void;
  onClose: () => void;
};

export const useShareModal = create<ShareModalStore>((set) => ({
  href: "",
  isOpen: false,
  onOpen: (href: string) => set({ isOpen: true, href }),
  onClose: () => set({ isOpen: false, href: "" }),
}));
