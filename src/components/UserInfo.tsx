// src/components/UserInfo.tsx
import React from "react";
import { User } from "lucide-react";
import styles from "./UserInfo.module.css";
import { useAuthStore } from "../store/authStore";

const UserInfo: React.FC = () => {
  // ✅ Pull state + actions from Zustand
  const { username, lastLogin, rememberMe, isAuthenticated, logout } =
    useAuthStore();

  if (!isAuthenticated) {
    return (
      <section className={styles.userInfo} role="banner" aria-label="Guest info">
        <p className={styles.guestMessage}>Not logged in</p>
      </section>
    );
  }

  return (
    <section
      className={styles.userInfo}
      role="banner"
      aria-label="User information and report header"
    >
      {/* User details */}
      <div className={styles.userDetails}>
        <User size={16} className={styles.userIcon} aria-hidden="true" />
        <span className={styles.welcomeText}>
          Welcome <strong>{username}</strong>
          {lastLogin && (
            <>
              {" "}
              • <span>Last Login: {lastLogin}</span>
            </>
          )}
        </span>
        <h4 className={styles.dashboardTitle}>
          {new Date().toLocaleString("default", { month: "long" })}{" "}
          {new Date().getFullYear()}
        </h4>
      </div>

      {/* Remember Me status */}
      <div className={styles.rememberMeInfo}>
        <small>
          {rememberMe ? "🔒 Remember Me enabled" : "⚡ Session only"}
        </small>
      </div>

      {/* Logout button */}
      <button onClick={logout} className={styles.logoutBtn}>
        Logout
      </button>
    </section>
  );
};

export default UserInfo;
