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

        {/* Accounts (kept from original) */}
        <li>
          <Link to="/accounts" className="hover:text-emerald-700 transition">
            Accounts
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
            <li>
              <Link to="/registration/requirements">Requirements</Link>
            </li>
            <li>
              <Link to="/registration/financials">Financials</Link>
            </li>
            <li>
              <Link to="/registration/help">Help</Link>
            </li>
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
              "gastroenterology",
              "endocrinology",
              "rheumatology",
              "hematology",
              "oncology",
              "infectious-disease",
              "allergy-immunology",
            ].map((field) => {
              // present a nicer label from slug
              const label = field
                .split("-")
                .map((p) => p[0].toUpperCase() + p.slice(1))
                .join(" ");
              // add the specific id that existed in MEDNOTES.html for Pulmonology
              const linkId = field === "pulmonology" ? "Imed1" : undefined;
              return (
                <li key={field}>
                  <Link to={`/reports/${field}`} id={linkId}>
                    {label}
                  </Link>
                </li>
              );
            })}
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
            <li>
              <Link to="/surgical/fluids">Fluids and Electrolytes</Link>
            </li>
            <li>
              <Link to="/surgical/perioperative">Perioperative Care</Link>
            </li>
            <li>
              <Link to="/surgical/chest">Chest Injuries</Link>
            </li>
            <li>
              <Link to="/surgical/abdominal-injuries">Abdominal Injuries</Link>
            </li>

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
                <li>
                  <Link to="/surgical/abdomen/acute">Acute Abdomen</Link>
                </li>
                <li>
                  <Link to="/surgical/abdomen/obstruction">
                    Intestinal Obstruction
                  </Link>
                </li>
                <li>
                  <Link to="/surgical/abdomen/esophagus">Esophageal Disorders</Link>
                </li>
                <li>
                  <Link to="/surgical/abdomen/gerd">GERD</Link>
                </li>
                <li>
                  <Link to="/surgical/abdomen/stomach-cancer">Stomach Cancer</Link>
                </li>
                <li>
                  <Link to="/surgical/abdomen/jaundice">Surgical Jaundice</Link>
                </li>
                <li>
                  <Link to="/surgical/abdomen/pancreas">Pancreatic Disorders</Link>
                </li>
                <li>
                  <Link to="/surgical/abdomen/colorectal">Colorectal Cancer</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/surgical/thyroid">Thyroid Gland Disorders</Link>
            </li>
            <li>
              <Link to="/surgical/polytrauma">Polytrauma</Link>
            </li>
            <li>
              <Link to="/surgical/critical-care">Critical Care</Link>
            </li>
            <li>
              <Link to="/surgical/neurotrauma">Neurotrauma</Link>
            </li>
            <li>
              <Link to="/surgical/burns">Burns</Link>
            </li>

            {/* New nested: Urological Conditions (from MEDNOTES.html) */}
            <li className={styles.dropdown}>
              <button
                onClick={() =>
                  toggleDropdownHelper("urological", openDropdown, setOpenDropdown)
                }
              >
                Urological Conditions
              </button>
              <ul
                className={`${styles.dropdownMenu} ${
                  openDropdown === "urological" ? styles.show : ""
                }`}
              >
                <li>
                  <Link to="/surgical/urology/hernias">Hernias</Link>
                </li>
                <li>
                  <Link to="/surgical/urology/testicular-scrotal">
                    Testicular &amp; Scrotal Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/surgical/urology/anorectal">Anorectal Conditions</Link>
                </li>
                <li>
                  <Link to="/surgical/urology/obstructive-uropathy">
                    Obstructive Uropathy
                  </Link>
                </li>
                <li>
                  <Link to="/surgical/urology/prostate">Prostate Diseases</Link>
                </li>
              </ul>
            </li>

            {/* New nested: Breast Conditions */}
            <li className={styles.dropdown}>
              <button
                onClick={() =>
                  toggleDropdownHelper("breast", openDropdown, setOpenDropdown)
                }
              >
                Breast Conditions
              </button>
              <ul
                className={`${styles.dropdownMenu} ${
                  openDropdown === "breast" ? styles.show : ""
                }`}
              >
                <li>
                  <Link to="/surgical/breast/benign">Benign</Link>
                </li>
                <li>
                  <Link to="/surgical/breast/malignant">Malignant</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Orthopaedics (kept from original; ensures Intro to Fractures id 'f1' preserved if present) */}
        <li className={styles.dropdown}>
          <button
            onClick={() =>
              toggleDropdownHelper("orthopaedics", openDropdown, setOpenDropdown)
            }
          >
            Orthopaedics
          </button>
          <ul
            className={`${styles.dropdownMenu} ${
              openDropdown === "orthopaedics" ? styles.show : ""
            }`}
          >
            <li>
              <Link to="/orthopaedics/introduction" id="f1">
                Introduction to Fractures
              </Link>
            </li>
            <li>
              <Link to="/orthopaedics/orif">ORIF</Link>
            </li>
            <li>
              <Link to="/orthopaedics/msk-infections">MSK Infections</Link>
            </li>
            <li>
              <Link to="/orthopaedics/pelvic-fractures">Pelvic Fractures</Link>
            </li>
            <li>
              <Link to="/orthopaedics/knee-injuries">Knee Injuries</Link>
            </li>
            <li>
              <Link to="/orthopaedics/ankle-foot">Ankle and Foot Injuries</Link>
            </li>
            <li>
              <Link to="/orthopaedics/upper-limb">Upper Limb Injuries</Link>
            </li>
            <li>
              <Link to="/orthopaedics/bone-tumors">Principles of Bone Tumors</Link>
            </li>

            {/* Pediatric Fractures nested */}
            <li className={styles.dropdown}>
              <button
                onClick={() =>
                  toggleDropdownHelper("pediatric-fractures", openDropdown, setOpenDropdown)
                }
              >
                Pediatric Fractures
              </button>
              <ul
                className={`${styles.dropdownMenu} ${
                  openDropdown === "pediatric-fractures" ? styles.show : ""
                }`}
              >
                <li>
                  <Link to="/orthopaedics/pediatric/msk-development">
                    MSK Development
                  </Link>
                </li>
                <li>
                  <Link to="/orthopaedics/pediatric/management">
                    Pediatric Fracture Management
                  </Link>
                </li>
                <li>
                  <Link to="/orthopaedics/pediatric/physeal-injuries">
                    Physeal Injuries
                  </Link>
                </li>
                <li>
                  <Link to="/orthopaedics/pediatric/supracondylar">
                    Supracondylar Humeral Fractures
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* NOTES (from MEDNOTES.html) */}
        <li className={styles.dropdown}>
          <button
            onClick={() => toggleDropdownHelper("notes", openDropdown, setOpenDropdown)}
          >
            NOTES
          </button>
          <ul
            className={`${styles.dropdownMenu} ${openDropdown === "notes" ? styles.show : ""}`}
          >
            {/* JKUAT nested */}
            <li className={styles.dropdown}>
              <button
                onClick={() =>
                  toggleDropdownHelper("notes-jkuat", openDropdown, setOpenDropdown)
                }
              >
                JKUAT
              </button>
              <ul
                className={`${styles.dropdownMenu} ${
                  openDropdown === "notes-jkuat" ? styles.show : ""
                }`}
              >
                <li>
                  <Link to="/notes/jkuat/general-surgery" id="JKUATgenSurgery">
                    General Surgery
                  </Link>
                </li>
                <li>
                  <Link to="/notes/jkuat/orthopaedics" id="JKUATortho">
                    Orthopaedics
                  </Link>
                </li>
                <li>
                  <Link to="/notes/jkuat/obsgyn" id="JKUATobgyn">
                    OBSGYN
                  </Link>
                </li>
                <li>
                  <Link to="/notes/jkuat/imed" id="JKUATiMED">
                    IMED
                  </Link>
                </li>
              </ul>
            </li>

            {/* Egerton nested */}
            <li className={styles.dropdown}>
              <button
                onClick={() =>
                  toggleDropdownHelper("notes-egerton", openDropdown, setOpenDropdown)
                }
              >
                Egerton
              </button>
              <ul
                className={`${styles.dropdownMenu} ${
                  openDropdown === "notes-egerton" ? styles.show : ""
                }`}
              >
                <li>
                  <Link to="/notes/egerton/general-surgery" id="EgertongenSurg">
                    General Surgery
                  </Link>
                </li>
                <li>
                  <Link to="/notes/egerton/orthopaedics">Orthopaedics</Link>
                </li>
                <li>
                  <Link to="/notes/egerton/obsgyn" id="EgertonOBGSGYN">
                    OB/GYN
                  </Link>
                </li>
                <li>
                  <Link to="/notes/egerton/imed" id="iMED">
                    EgertoniMED
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/notes/uon">UON</Link>
            </li>
            <li>
              <Link to="/notes/ku">KU</Link>
            </li>
          </ul>
        </li>

        {/* Payment Methods (from MEDNOTES.html) */}
        <li>
          <Link to="/payment-methods">Payment Methods</Link>
        </li>

        {/* Psychiatric Evaluation link with original id */}
        <li>
          <Link to="/psychiatry" id="psych">
            Psychiatric Evaluation
          </Link>
        </li>

        {/* Useful Links (from MEDNOTES.html) */}
        <li className={styles.dropdown}>
          <button
            onClick={() =>
              toggleDropdownHelper("useful-links", openDropdown, setOpenDropdown)
            }
          >
            Useful Links
          </button>
          <ul
            className={`${styles.dropdownMenu} ${
              openDropdown === "useful-links" ? styles.show : ""
            }`}
          >
            <li>
              <Link to="/useful/kiiri-obgyn" id="kiiriobs">
                KIIRI OBGYN
              </Link>
            </li>
            <li>
              <Link to="/useful/orthopaedics">Orthopaedics</Link>
            </li>
            <li>
              <Link to="/useful/obsgyn" id="EgertonOBGSGYN">
                OB/GYN
              </Link>
            </li>
            <li>
              <Link to="/useful/imed" id="iMED">
                EgertoniMED
              </Link>
            </li>
          </ul>
        </li>

        {/* Kept original extra static pages (do not delete) */}
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/join">Join Us</Link>
        </li>
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
