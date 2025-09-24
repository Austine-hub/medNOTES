// src/components/Navbar.tsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

interface NavbarProps {
  reportMonth?: string;
  reportYear?: number;
}

/* ────────────────────────────────
   📌 Define Navigation Item Type
──────────────────────────────── */
interface NavItem {
  path: string;
  label: string;
  id: string;
  external?: boolean; // ✅ optional for external links
}

const Navbar: React.FC<NavbarProps> = () => {
  /* ────────────────────────────────
     📌 State & Refs
  ──────────────────────────────── */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const location = useLocation();

  /* ────────────────────────────────
     📌 Close menu when route changes
  ──────────────────────────────── */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  /* ────────────────────────────────
     📌 Close menu on outside click / Esc
  ──────────────────────────────── */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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

  /* ────────────────────────────────
     📌 Toggle Mobile Menu
  ──────────────────────────────── */
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  /* ────────────────────────────────
     📌 Utility: Active Route Check
  ──────────────────────────────── */
  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  /* ────────────────────────────────
     📌 Navigation Items (Typed!)
  ──────────────────────────────── */
  const navigationItems: NavItem[] = [
    { path: "/", label: "Home", id: "home" },
    { path: "/accounts", label: "Resources", id: "accounts" },
    { path: "/pharmco", label: "Pharmacology", id: "pharmco" },
    { path: "/about", label: "Get Involved", id: "about" },
    { path: "/blog", label: "Blog", id: "blog" },
    {
      path: "https://example.com",
      label: "Join Us",
      id: "join",
      external: true, // ✅ external link
    },
  ];

  return (
    <nav
      ref={navbarRef}
      className={styles.navbar}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* ────────────────
          🍔 Mobile Menu Toggle
      ──────────────── */}
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

      {/* ────────────────
          🔗 Navigation Links
      ──────────────── */}
      <ul
        id="main-navigation"
        className={`${styles.navList} ${
          isMobileMenuOpen ? styles.navListOpen : ""
        }`}
        role="menubar"
      >
        {navigationItems.map(({ path, label, id, external }) => (
          <li key={id} role="none">
            {external ? (
              // 🌐 External link
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
                id={id}
                role="menuitem"
                tabIndex={isMobileMenuOpen || window.innerWidth > 768 ? 0 : -1}
              >
                {label}
              </a>
            ) : (
              // 🔗 Internal SPA link
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
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
