/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface DiscoverState {
  isTodayVideoInFocus: boolean;
  currentCategory: {
    categoryId: string;
    categoryName: string;
    filters: { filter: string; enum: string }[];
  } | null;
}

interface DiscoverStore {
  discoverState: DiscoverState;
  setDiscoverState: (state: any) => void;
}

export const useDiscoverStore = create<DiscoverStore>()((set, get) => ({
  discoverState: {
    isTodayVideoInFocus: true,
    currentCategory: null,
  },
  setDiscoverState: (state: DiscoverState) => {
    const currentState = get().discoverState;
    set({ discoverState: { ...currentState, ...state } });
  },
}));
