import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
        <li><a href="#">Home</a></li>

        {/* Registration Dropdown */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdown(1)}>Registration</button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === 1 ? styles.show : ""}`}>
            <li><a href="#">Requirements</a></li>
            <li><a href="#">Financials</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </li>

        {/* Medical Reports Dropdown */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdown(2)}>Medical Reports</button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === 2 ? styles.show : ""}`}>
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

        {/* Surgical Reports Dropdown with nested menus */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdown(3)}>Surgical Reports</button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === 3 ? styles.show : ""}`}>
            <li><a href="#">Fluids and Electrolytes</a></li>
            <li><a href="#">Perioperative Care</a></li>
            <li><a href="#">Chest Injuries</a></li>
            <li><a href="#">Abdominal Injuries</a></li>
            <li className={styles.dropdown}>
              <button>Abdominal Conditions</button>
              <ul className={styles.nestedDropdownMenu}>
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
            <li className={styles.dropdown}>
              <button>Urological Conditions</button>
              <ul className={styles.nestedDropdownMenu}>
                <li><a href="#">Hernias</a></li>
                <li><a href="#">Testicular & Scrotal Conditions</a></li>
                <li><a href="#">Anorectal Conditions</a></li>
                <li><a href="#">Obstructive Uropathy</a></li>
                <li><a href="#">Prostate Diseases</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <button>Breast Conditions</button>
              <ul className={styles.nestedDropdownMenu}>
                <li><a href="#">Benign</a></li>
                <li><a href="#">Malignant</a></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Orthopaedics Dropdown */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdown(4)}>Orthopaedics</button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === 4 ? styles.show : ""}`}>
            <li><a href="#">Introduction to Fractures</a></li>
            <li><a href="#">ORIF</a></li>
            <li><a href="#">MSK Infections</a></li>
            <li><a href="#">Pelvic Fractures</a></li>
            <li><a href="#">Knee Injuries</a></li>
            <li><a href="#">Ankle and Foot Injuries</a></li>
            <li><a href="#">Upper Limb Injuries</a></li>
            <li><a href="#">Principles of Bone Tumors</a></li>
            <li className={styles.dropdown}>
              <button>Pediatric Fractures</button>
              <ul className={styles.nestedDropdownMenu}>
                <li><a href="#">MSK Development</a></li>
                <li><a href="#">Pediatric Fracture Management</a></li>
                <li><a href="#">Physeal Injuries</a></li>
                <li><a href="#">Supracondylar Humeral Fractures</a></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Notes Dropdown */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdown(5)}>NOTES</button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === 5 ? styles.show : ""}`}>
            <li className={styles.dropdown}>
              <button>JKUAT</button>
              <ul className={styles.nestedDropdownMenu}>
                <li><a href="#">General Surgery</a></li>
                <li><a href="#">Orthopaedics</a></li>
                <li><a href="#">OBSGYN</a></li>
                <li><a href="#">IMED</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <button>Egerton</button>
              <ul className={styles.nestedDropdownMenu}>
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

        {/* Useful Links Dropdown */}
        <li className={styles.dropdown}>
          <button onClick={() => toggleDropdown(6)}>Useful Links</button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === 6 ? styles.show : ""}`}>
            <li><a href="#">KIIRI OBGYN</a></li>
            <li><a href="#">Orthopaedics</a></li>
            <li><a href="#">OBGSGYN</a></li>
            <li><a href="#">EgertoniMED</a></li>
          </ul>
        </li>

        {/* Static Links */}
        <li><a href="#">Payment Methods</a></li>
        <li><a href="#">Psychiatric Evaluation</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;