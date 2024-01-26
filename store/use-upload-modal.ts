import { create } from "zustand";

type UploadModalStore = {
  title: string;
  description: string;
  media: File | null;
  isOpen: boolean;
  isFormDisabled: boolean;

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
  isFormDisabled: false,

  setTitle: (title: string) => set({ title }),
  setDescription: (description: string) => set({ description }),
  setMedia: (media: File) => set({ media }),
  clearMedia: () => set({ media: null }),
  clearInputs: () =>
    set({ title: "", description: "", media: null, isFormDisabled: false }),

  onClose: () => set({ isOpen: false }),
  onOpen: ({
    title,
    description,
    media,
  }: {
    title: string;
    description: string;
    media: File;
  }) => set({ isOpen: true, isFormDisabled: true, title, description, media }),
}));
