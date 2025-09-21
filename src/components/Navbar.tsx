import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { toggleDropdownHelper } from "../utils/dropdownHelpers";

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

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      {/* LEFT: Nav links */}
      <ul
        className={`${styles.navList} ${
          isMobileMenuOpen ? styles.navListOpen : ""
        }`}
      >
        {/* Home */}
        <li>
          <Link to="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
        </li>

        {/* Registration */}
        <li className={styles.dropdown}>
          <button
            onClick={() =>
              toggleDropdownHelper("registration", openDropdown, setOpenDropdown)
            }
          >
            Registration
          </button>
          <ul
            className={`${styles.dropdownMenu} ${
              openDropdown === "registration" ? styles.show : ""
            }`}
          >
            <li><Link to="/registration/requirements">Requirements</Link></li>
            <li><Link to="/registration/financials">Financials</Link></li>
            <li><Link to="/registration/help">Help</Link></li>
          </ul>
        </li>

        {/* Medical Reports */}
        <li className={styles.dropdown}>
          <button
            onClick={() =>
              toggleDropdownHelper("medical", openDropdown, setOpenDropdown)
            }
          >
            Medical Reports
          </button>
          <ul
            className={`${styles.dropdownMenu} ${
              openDropdown === "medical" ? styles.show : ""
            }`}
          >
            {[
              "pulmonology",
              "neurology",
              "nephrology",
              "cardiology",
              "gastro",
              "endocrine",
              "rheumatology",
              "hematology",
              "oncology",
              "infectious",
              "allergy",
            ].map((field) => (
              <li key={field}>
                <Link to={`/reports/${field}`}>
                  {field.charAt(0).toUpperCase() + field.slice(1).replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Surgical Reports */}
        <li className={styles.dropdown}>
          <button
            onClick={() =>
              toggleDropdownHelper("surgical", openDropdown, setOpenDropdown)
            }
          >
            Surgical Reports
          </button>
          <ul
            className={`${styles.dropdownMenu} ${
              openDropdown === "surgical" ? styles.show : ""
            }`}
          >
            <li><Link to="/surgical/fluids">Fluids & Electrolytes</Link></li>
            <li><Link to="/surgical/periop">Perioperative Care</Link></li>
            <li><Link to="/surgical/chest">Chest Injuries</Link></li>
            <li><Link to="/surgical/abdomen">Abdominal Injuries</Link></li>

            {/* Nested Abdominal */}
            <li className={styles.dropdown}>
              <button
                onClick={() =>
                  toggleDropdownHelper("abdominal", openDropdown, setOpenDropdown)
                }
              >
                Abdominal Conditions
              </button>
              <ul
                className={`${styles.dropdownMenu} ${
                  openDropdown === "abdominal" ? styles.show : ""
                }`}
              >
                <li><Link to="/surgical/abdomen/acute">Acute Abdomen</Link></li>
                <li><Link to="/surgical/abdomen/obstruction">Intestinal Obstruction</Link></li>
                <li><Link to="/surgical/abdomen/esophagus">Esophageal Disorders</Link></li>
                <li><Link to="/surgical/abdomen/gerd">GERD</Link></li>
                <li><Link to="/surgical/abdomen/stomach-cancer">Stomach Cancer</Link></li>
                <li><Link to="/surgical/abdomen/jaundice">Surgical Jaundice</Link></li>
                <li><Link to="/surgical/abdomen/pancreas">Pancreatic Disorders</Link></li>
                <li><Link to="/surgical/abdomen/colorectal">Colorectal Cancer</Link></li>
              </ul>
            </li>

            <li><Link to="/surgical/thyroid">Thyroid Disorders</Link></li>
            <li><Link to="/surgical/polytrauma">Polytrauma</Link></li>
            <li><Link to="/surgical/critical-care">Critical Care</Link></li>
            <li><Link to="/surgical/neurotrauma">Neurotrauma</Link></li>
            <li><Link to="/surgical/burns">Burns</Link></li>
          </ul>
        </li>

        {/* Static Pages */}
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/join">Join Us</Link></li>
      </ul>

      {/* RIGHT: Brand + Hamburger */}
      <div className={styles.navbarHeader}>
        <div className={styles.brand}>
          <h2 className={styles.dashboardTitle}>
            Your Health Report for {reportMonth} {reportYear}
          </h2>
        </div>
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {[1, 2, 3].map((_, idx) => (
            <span
              key={idx}
              className={isMobileMenuOpen ? styles.barOpen : styles.bar}
            />
          ))}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


