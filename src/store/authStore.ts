// src/store/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  username: string | null;
  lastLogin: string | null;
  isAuthenticated: boolean;
  rememberMe: boolean;
  login: (username: string, rememberMe: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      username: null,
      lastLogin: null,
      isAuthenticated: false,
      rememberMe: false,
      login: (username, rememberMe) =>
        set({
          username,
          lastLogin: new Date().toLocaleString(),
          isAuthenticated: true,
          rememberMe,
        }),
      logout: () =>
        set({
          username: null,
          lastLogin: null,
          isAuthenticated: false,
          rememberMe: false,
        }),
    }),
    {
      name: "auth-storage",
      // ✅ only persist if rememberMe is true
      partialize: (state) =>
        state.rememberMe
          ? { username: state.username, lastLogin: state.lastLogin, isAuthenticated: state.isAuthenticated, rememberMe: state.rememberMe }
          : {},
    }
  )
);

