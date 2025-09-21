import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  title?: string;
  leftLogoSrc?: string;
  leftLogoAlt?: string;
  rightLogoSrc?: string;
  rightLogoAlt?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Welcome to Your Personalized Medical Studies",
  leftLogoSrc = "/images/pic1.png",
  leftLogoAlt = "Kenya Revenue Authority Logo",
  rightLogoSrc = "/images/pic2.png",
  rightLogoAlt = "iTax Logo",
}) => {
  return (
    <header className={styles.headerBar}>
      <img
        src={leftLogoSrc}
        alt={leftLogoAlt}
        className={styles.leftLogo}
      />
      <h1 className={styles.title}>{title}</h1>
      <img
        src={rightLogoSrc}
        alt={rightLogoAlt}
        className={styles.rightLogo}
      />
    </header>
  );
};

export default Header;
