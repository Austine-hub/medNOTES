import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { toggleDropdownHelper } from "../utils/dropdownHelpers";

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarHeader}>
        <div className={styles.brand}>Your Health Report</div>
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? styles.barOpen : styles.bar}></span>
          <span className={isMobileMenuOpen ? styles.barOpen : styles.bar}></span>
          <span className={isMobileMenuOpen ? styles.barOpen : styles.bar}></span>
        </button>
      </div>

      <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ""}`}>
        {/* Home */}
        <li><a href="#">Home</a></li>

        {/* Registration */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdownHelper("registration", openDropdown, setOpenDropdown)}>
            Registration
          </button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "registration" ? styles.show : ""}`}>
            <li><a href="#">Requirements</a></li>
            <li><a href="#">Financials</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </li>

        {/* Medical Reports */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdownHelper("medical", openDropdown, setOpenDropdown)}>
            Medical Reports
          </button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "medical" ? styles.show : ""}`}>
            <li><a href="#">Pulmonology</a></li>
            <li><a href="#">Neurology</a></li>
            <li><a href="#">Nephrology</a></li>
            <li><a href="#">Cardiology</a></li>
            <li><a href="#">Gastroenterology</a></li>
            <li><a href="#">Endocrinology</a></li>
            <li><a href="#">Rheumatology</a></li>
            <li><a href="#">Hematology</a></li>
            <li><a href="#">Oncology</a></li>
            <li><a href="#">Infectious Disease</a></li>
            <li><a href="#">Allergy and Immunology</a></li>
          </ul>
        </li>

        {/* Surgical Reports with nested */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdownHelper("surgical", openDropdown, setOpenDropdown)}>
            Surgical Reports
          </button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "surgical" ? styles.show : ""}`}>
            <li><a href="#">Fluids and Electrolytes</a></li>
            <li><a href="#">Perioperative Care</a></li>
            <li><a href="#">Chest Injuries</a></li>
            <li><a href="#">Abdominal Injuries</a></li>

            {/* Nested: Abdominal Conditions */}
            <li className={styles.dropdown}>
              <button onClick={() => toggleDropdownHelper("abdominal", openDropdown, setOpenDropdown)}>
                Abdominal Conditions
              </button>
              <ul className={`${styles.dropdownMenu} ${openDropdown === "abdominal" ? styles.show : ""}`}>
                <li><a href="#">Acute Abdomen</a></li>
                <li><a href="#">Intestinal Obstruction</a></li>
                <li><a href="#">Esophageal Disorders</a></li>
                <li><a href="#">GERD</a></li>
                <li><a href="#">Stomach Cancer</a></li>
                <li><a href="#">Surgical Jaundice</a></li>
                <li><a href="#">Pancreatic Disorders</a></li>
                <li><a href="#">Colorectal Cancer</a></li>
              </ul>
            </li>

            <li><a href="#">Thyroid Gland Disorders</a></li>
            <li><a href="#">Polytrauma</a></li>
            <li><a href="#">Critical Care</a></li>
            <li><a href="#">Neurotrauma</a></li>
            <li><a href="#">Burns</a></li>

            {/* Nested: Urological Conditions */}
            <li className={styles.dropdown}>
              <button onClick={() => toggleDropdownHelper("urology", openDropdown, setOpenDropdown)}>
                Urological Conditions
              </button>
              <ul className={`${styles.dropdownMenu} ${openDropdown === "urology" ? styles.show : ""}`}>
                <li><a href="#">Hernias</a></li>
                <li><a href="#">Testicular & Scrotal Conditions</a></li>
                <li><a href="#">Anorectal Conditions</a></li>
                <li><a href="#">Obstructive Uropathy</a></li>
                <li><a href="#">Prostate Diseases</a></li>
              </ul>
            </li>

            {/* Nested: Breast Conditions */}
            <li className={styles.dropdown}>
              <button onClick={() => toggleDropdownHelper("breast", openDropdown, setOpenDropdown)}>
                Breast Conditions
              </button>
              <ul className={`${styles.dropdownMenu} ${openDropdown === "breast" ? styles.show : ""}`}>
                <li><a href="#">Benign</a></li>
                <li><a href="#">Malignant</a></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Orthopaedics */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdownHelper("ortho", openDropdown, setOpenDropdown)}>
            Orthopaedics
          </button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "ortho" ? styles.show : ""}`}>
            <li><a href="#">Introduction to Fractures</a></li>
            <li><a href="#">ORIF</a></li>
            <li><a href="#">MSK Infections</a></li>
            <li><a href="#">Pelvic Fractures</a></li>
            <li><a href="#">Knee Injuries</a></li>
            <li><a href="#">Ankle and Foot Injuries</a></li>
            <li><a href="#">Upper Limb Injuries</a></li>
            <li><a href="#">Principles of Bone Tumors</a></li>

            {/* Nested: Pediatric Fractures */}
            <li className={styles.dropdown}>
              <button onClick={() => toggleDropdownHelper("pediatric", openDropdown, setOpenDropdown)}>
                Pediatric Fractures
              </button>
              <ul className={`${styles.dropdownMenu} ${openDropdown === "pediatric" ? styles.show : ""}`}>
                <li><a href="#">MSK Development</a></li>
                <li><a href="#">Pediatric Fracture Management</a></li>
                <li><a href="#">Physeal Injuries</a></li>
                <li><a href="#">Supracondylar Humeral Fractures</a></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* NOTES */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdownHelper("notes", openDropdown, setOpenDropdown)}>NOTES</button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "notes" ? styles.show : ""}`}>
            <li className={styles.dropdown}>
              <button onClick={() => toggleDropdownHelper("jkuat", openDropdown, setOpenDropdown)}>JKUAT</button>
              <ul className={`${styles.dropdownMenu} ${openDropdown === "jkuat" ? styles.show : ""}`}>
                <li><a href="#">General Surgery</a></li>
                <li><a href="#">Orthopaedics</a></li>
                <li><a href="#">OBSGYN</a></li>
                <li><a href="#">IMED</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <button onClick={() => toggleDropdownHelper("egerton", openDropdown, setOpenDropdown)}>Egerton</button>
              <ul className={`${styles.dropdownMenu} ${openDropdown === "egerton" ? styles.show : ""}`}>
                <li><a href="#">General Surgery</a></li>
                <li><a href="#">Orthopaedics</a></li>
                <li><a href="#">OBGSGYN</a></li>
                <li><a href="#">EgertoniMED</a></li>
              </ul>
            </li>
            <li><a href="#">UON</a></li>
            <li><a href="#">KU</a></li>
          </ul>
        </li>

        {/* Static links */}
        <li><a href="#">About Us</a></li>
        <li><a href="#">Psychiatric Evaluation</a></li>

        {/* Useful Links */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdownHelper("useful", openDropdown, setOpenDropdown)}>Useful Links</button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "useful" ? styles.show : ""}`}>
            <li><a href="#">KIIRI OBGYN</a></li>
            <li><a href="#">Orthopaedics</a></li>
            <li><a href="#">OBGSGYN</a></li>
            <li><a href="#">EgertoniMED</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
