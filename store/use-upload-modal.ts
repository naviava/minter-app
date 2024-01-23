import { create } from "zustand";

type UploadModalStore = {
  title: string;
  description: string;
  media: File | null;
  isOpen: boolean;

  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setMedia: (media: File) => void;
  clearMedia: () => void;
  clearInputs: () => void;

  onClose: () => void;
  onOpen: ({
    title,
    description,
    media,
  }: {
    title: string;
    description: string;
    media: File;
  }) => void;
};

export const useUploadModal = create<UploadModalStore>((set) => ({
  title: "",
  description: "",
  media: null,
  isOpen: false,

  setTitle: (title: string) => set({ title }),
  setDescription: (description: string) => set({ description }),
  setMedia: (media: File) => set({ media }),
  clearMedia: () => set({ media: null }),
  clearInputs: () => set({ title: "", description: "", media: null }),

  onClose: () => set({ isOpen: false }),
  onOpen: ({
    title,
    description,
    media,
  }: {
    title: string;
    description: string;
    media: File;
  }) => set({ isOpen: true, title, description, media }),
}));
