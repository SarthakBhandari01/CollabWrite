import { create } from "zustand";

export const useEditorStore = create((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
