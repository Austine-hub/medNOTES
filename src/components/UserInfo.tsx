import React from "react";
import { User, Search, Settings } from "lucide-react";
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
  reportMonth = "July",
  reportYear = new Date().getFullYear(),
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
        </span>
      </div>

      {/* Report title 
      <div className={styles.reportHeader}>
        <h1 className={styles.dashboardTitle}>
          Your Health Report for {reportMonth} {reportYear}
        </h1>
      </div>*/}

      {/* Utility icons 
      <div className={styles.utilityIcons}>
        <Search size={20} />
        <Settings size={20} />
      </div> */}
    </section>
  );
};

export default UserInfo;
