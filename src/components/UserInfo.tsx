import React from "react";
import styles from "./UserInfo.module.css";

interface UserInfoProps {
  username: string;
  userId: string;
  lastLogin: string;
  reportMonth?: string;
  reportYear?: number;
}

const UserInfo: React.FC<UserInfoProps> = ({
  username,
  userId,
  lastLogin,
  reportMonth = "July",
  reportYear = 2025,
}) => {
  return (
    <>
      <section className={styles.userInfo}>
        <span>
          <i className="fa fa-user" aria-hidden="true"></i>{" "}
          Welcome {username} ({userId}) - Last Login: {lastLogin}
        </span>
      </section>

      <h2 className={styles.dashboardTitle}>
        Your Health Report for {reportMonth} {reportYear}
      </h2>
    </>
  );
};

export default UserInfo;
