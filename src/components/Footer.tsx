import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main footer content */}
        <div className={styles.footerContent}>
          {/* Personal Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Personal</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Books</a></li>
              <li><a href="#" className={styles.footerLink}>USMLE Notes</a></li>
              <li><a href="#" className={styles.footerLink}>JKUAT Past Papers</a></li>
              <li><a href="#" className={styles.footerLink}>MCQ Books</a></li>
              <li><a href="#" className={styles.footerLink}>OSCES Books</a></li>
            </ul>
          </div>

          {/* Business Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Short Notes</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Paeds</a></li>
              <li><a href="#" className={styles.footerLink}>Psychiatry</a></li>
              <li><a href="#" className={styles.footerLink}>Surgery</a></li>
              <li><a href="#" className={styles.footerLink}>IMED</a></li>
              <li><a href="#" className={styles.footerLink}>OBGYN</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>More</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Flow Diagrams</a></li>
              <li><a href="#" className={styles.footerLink}>History Taking</a></li>
              <li><a href="#" className={styles.footerLink}>Visual Mnemonics</a></li>
              <li><a href="#" className={styles.footerLink}>Harrison Corner</a></li>
              <li><a href="#" className={styles.footerLink}>Snippets</a></li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Blog Section</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>OBGYN</a></li>
              <li><a href="#" className={styles.footerLink}>Orthopaedics</a></li>
              <li><a href="#" className={styles.footerLink}>Dermatology</a></li>
              <li><a href="#" className={styles.footerLink}>Medicine</a></li>
              <li><a href="#" className={styles.footerLink}>Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Extras</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Forensics and Toxicology</a></li>
              <li><a href="#" className={styles.footerLink}>Dentistry</a></li>
              <li><a href="#" className={styles.footerLink}>Anasethesia</a></li>
              <li><a href="#" className={styles.footerLink}>Physiology REview</a></li>
              <li><a href="#" className={styles.footerLink}>Radiology</a></li>
              <li><a href="#" className={styles.footerLink}>ENT</a></li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className={styles.separator}></div>

        {/* Bottom section */}
        <div className={styles.bottomSection}>
          

          {/* Right side content */}
          <div className={styles.rightSection}>
            
            {/* Copyright and regulation text */}
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;