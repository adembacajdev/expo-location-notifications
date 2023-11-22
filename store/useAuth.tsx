/* eslint-disable @typescript-eslint/no-explicit-any */
import { router } from "expo-router";
import { create } from "zustand";

interface AuthStore {
  isLoading: boolean;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuth = create<AuthStore>()((set, get) => ({
  isLoading: false,
  isLoggedIn: true,
  login: () => {
    set({ isLoggedIn: true });
    router.replace("/");
  },
  logout: () => {
    set({ isLoggedIn: false });
  },
}));
