import React from "react";
import { User } from "lucide-react";
import styles from "./UserInfo.module.css";

interface UserInfoProps {
  username: string;
  userId: string;
  lastLogin: string;
  reportMonth?: string;
  reportYear?: number;
  className?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  username,
  userId,
  lastLogin,
  reportMonth = "July", // ✅ Now used
  reportYear = new Date().getFullYear(), // ✅ Now used
  className = "",
}) => {
  return (
    <section
      className={`${styles.userInfo} ${className}`}
      role="banner"
      aria-label="User information and report header"
    >
      {/* User details */}
      <div className={styles.userDetails}>
        <User size={16} className={styles.userIcon} aria-hidden="true" />
        <span className={styles.welcomeText}>
          Welcome <strong>{username}</strong> ({userId}) • Last Login:{" "}
          {lastLogin}
          <h2 className={styles.dashboardTitle}>
          {reportMonth} {reportYear}
        </h2>
        </span>
      </div>  
    </section>
  );
};

export default UserInfo;
