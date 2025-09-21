import React from 'react';
import styles from './Header.module.css';

// ✅ Import images instead of using relative paths in props
import leftLogo from '../assets/images/pic1.png';
import rightLogo from '../assets/images/pic2.png';

interface HeaderProps {
  title?: string;
  leftLogoSrc?: string;
  leftLogoAlt?: string;
  rightLogoSrc?: string;
  rightLogoAlt?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = 'Welcome to Your Personalized Medical Studies',
  leftLogoSrc = leftLogo,
  leftLogoAlt = 'Kenya Revenue Authority Logo',
  rightLogoSrc = rightLogo,
  rightLogoAlt = 'iTax Logo',
}) => {
  return (
    <header className={styles.headerBar} aria-label="Main site header">
      <img
        src={leftLogoSrc}
        alt={leftLogoAlt}
        className={styles.kraLogo}
      />
      <h1 className={styles.title}>{title}</h1>
      <img
        src={rightLogoSrc}
        alt={rightLogoAlt}
        className={styles.itaxLogo}
      />
    </header>
  );
};

export default Header;

