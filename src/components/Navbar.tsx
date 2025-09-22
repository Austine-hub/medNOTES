import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

interface NavbarProps {
  reportMonth?: string;
  reportYear?: number;
}

const Navbar: React.FC<NavbarProps> = ({
  reportMonth = "July",
  reportYear = 2025,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdownId: string) => {
    setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  // Navigation items configuration for easier maintenance
  const navigationItems = [
    { path: "/", label: "Home", id: "home" },
    { path: "/accounts", label: "Accounts", id: "accounts" },
    { path: "/payment-methods", label: "Payment Methods", id: "payment-methods" },
    { path: "/psychiatry", label: "Psychiatric Evaluation", id: "psych" },
    { path: "/about", label: "About Us", id: "about" },
    { path: "/join", label: "Join Us", id: "join" },
  ] as const;

  return (
    <nav 
      ref={navbarRef}
      className={styles.navbar}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Mobile hamburger button */}
      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="main-navigation"
        type="button"
      >
        {[1, 2, 3].map((_, idx) => (
          <span
            key={idx}
            className={styles.bar}
            aria-hidden="true"
          />
        ))}
      </button>

      {/* Navigation links */}
      <ul
        id="main-navigation"
        className={`${styles.navList} ${
          isMobileMenuOpen ? styles.navListOpen : ""
        }`}
        role="menubar"
      >
        {navigationItems.map(({ path, label, id }) => (
          <li key={id} role="none">
            <Link 
              to={path}
              className={`${styles.navLink} ${isActive(path) ? styles.navLinkActive : ''}`}
              id={id}
              role="menuitem"
              aria-current={isActive(path) ? "page" : undefined}
              tabIndex={isMobileMenuOpen || window.innerWidth > 768 ? 0 : -1}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Optional: Brand/Logo section - uncomment if needed */}
      {/*
      <div className={styles.brand}>
        <Link to="/" aria-label="Go to homepage">
          Your Brand
        </Link>
      </div>
      */}
    </nav>
  );
};

export default React.memo(Navbar);