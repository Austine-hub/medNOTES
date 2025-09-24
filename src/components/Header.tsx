import React from "react";
import styles from "./Header.module.css";

// Enhanced interface with better typing
interface HeaderProps {
  title?: string;
  leftLogo?: {
    src: string;
    alt: string;
    onClick?: () => void;
  };
  rightLogo?: {
    src: string;
    alt: string;
    onClick?: () => void;
  };
  className?: string;
  'aria-label'?: string;
}

// Default props
const DEFAULT_PROPS = {
  title: "Welcome to Your Personalized Medical Studies",
  leftLogo: {
    src: "/smile1.png", // ✅ correct path (no /public)
    alt: "Med Student",
  },
  rightLogo: {
    src: "/smile2.png", // ✅ correct path (no /public)
    alt: "Med Student",
  },
} as const;

const Header: React.FC<HeaderProps> = ({
  title = DEFAULT_PROPS.title,
  leftLogo = DEFAULT_PROPS.leftLogo,
  rightLogo = DEFAULT_PROPS.rightLogo,
  className,
  'aria-label': ariaLabel = "Site header",
}) => {
  // Memoized logo renderer to avoid prop drilling
  const renderLogo = React.useCallback((
    logo: NonNullable<HeaderProps['leftLogo']>,
    additionalClassName?: string
  ) => {
    const handleClick = logo.onClick;
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if ((event.key === 'Enter' || event.key === ' ') && handleClick) {
        event.preventDefault();
        handleClick();
      }
    };

    const logoElement = (
      <img
        src={logo.src}
        alt={logo.alt}
        className={`${styles.logo} ${additionalClassName || ''}`}
        loading="eager" // Header logos should load immediately
        decoding="async" // Non-blocking decode
        // Add dimensions if known for better CLS
        // width={120} height={48}
      />
    );

    // Wrap in button if interactive
    if (handleClick) {
      return (
        <button
          type="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={styles.logoButton}
          aria-label={`Navigate using ${logo.alt}`}
        >
          {logoElement}
        </button>
      );
    }

    return logoElement;
  }, []);

  return (
    <header 
      className={`${styles.headerBar} ${className || ''}`}
      aria-label={ariaLabel}
      role="banner" // Semantic landmark
    >
      {leftLogo && renderLogo(leftLogo)}
      
      <h1 className={styles.title}>
        {title}
      </h1>
      
      {rightLogo && renderLogo(rightLogo)}
    </header>
  );
};

// Export with display name for better debugging
Header.displayName = 'Header';

export default React.memo(Header);