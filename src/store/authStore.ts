// src/store/authStore.ts
import { create } from "zustand";

interface AuthState {
  username: string | null;
  isAuthenticated: boolean;
  lastLogin: string | null;
  rememberMe: boolean;
  login: (username: string, rememberMe?: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  username: null,
  isAuthenticated: false,
  lastLogin: null,
  rememberMe: false,

  // ✅ Login
  login: (username, rememberMe = false) => {
    const now = new Date().toLocaleString(); // e.g., "9/24/2025, 12:15:30 PM"
    set({
      username,
      isAuthenticated: true,
      lastLogin: now,
      rememberMe,
    });

    // Optional: persist to localStorage if rememberMe is true
    if (rememberMe) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ username, lastLogin: now, rememberMe })
      );
    }
  },

  // ✅ Logout
  logout: () => {
    set({
      username: null,
      isAuthenticated: false,
      lastLogin: null,
      rememberMe: false,
    });
    localStorage.removeItem("auth");
  },
}));

// ✅ Auto-load saved session on page refresh
const saved = localStorage.getItem("auth");
if (saved) {
  const parsed = JSON.parse(saved);
  useAuthStore.setState({
    username: parsed.username,
    isAuthenticated: true,
    lastLogin: parsed.lastLogin,
    rememberMe: parsed.rememberMe,
  });
}

