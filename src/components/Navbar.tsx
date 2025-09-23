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

  // Close dropdowns when clicking outside or pressing Escape
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

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  // 🔹 Centralized nav config — aligned with App.tsx
  const navigationItems = [
    { path: "/", label: "Home", id: "home" },
    { path: "/accounts", label: "Resources", id: "accounts" },
    { path: "/pharmco", label: "Pharmacology", id: "pharmco" },
    { path: "/about", label: "Get Involved", id: "about" },
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
          <span key={idx} className={styles.bar} aria-hidden="true" />
        ))}
      </button>

      {/* Navigation links */}
      <ul
        id="main-navigation"
        className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ""}`}
        role="menubar"
      >
        {navigationItems.map(({ path, label, id }) => (
          <li key={id} role="none">
            <Link
              to={path}
              className={`${styles.navLink} ${
                isActive(path) ? styles.navLinkActive : ""
              }`}
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
    </nav>
  );
};

export default React.memo(Navbar);
