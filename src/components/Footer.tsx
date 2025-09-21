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
              <li><a href="#" className={styles.footerLink}>Money Market Fund</a></li>
              <li><a href="#" className={styles.footerLink}>Health Insurance Covers</a></li>
              <li><a href="#" className={styles.footerLink}>Britam Motor Insurance</a></li>
              <li><a href="#" className={styles.footerLink}>Travel Insurance</a></li>
              <li><a href="#" className={styles.footerLink}>Individual Pension Plans</a></li>
            </ul>
          </div>

          {/* Business Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Business</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Unit Trust Funds</a></li>
              <li><a href="#" className={styles.footerLink}>Work Injury Benefits Act</a></li>
              <li><a href="#" className={styles.footerLink}>School Student Personal Accident</a></li>
              <li><a href="#" className={styles.footerLink}>Group Life Cover</a></li>
              <li><a href="#" className={styles.footerLink}>Marine Insurance</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>About</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Leadership</a></li>
              <li><a href="#" className={styles.footerLink}>Our Story</a></li>
              <li><a href="#" className={styles.footerLink}>Careers</a></li>
              <li><a href="#" className={styles.footerLink}>Britam Foundation</a></li>
              <li><a href="#" className={styles.footerLink}>Open Tenders</a></li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Help Center</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Locate a Hospital</a></li>
              <li><a href="#" className={styles.footerLink}>File a Claim</a></li>
              <li><a href="#" className={styles.footerLink}>Motor Rescue Services</a></li>
              <li><a href="#" className={styles.footerLink}>Forms and Downloads</a></li>
              <li><a href="#" className={styles.footerLink}>Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Terms And Conditions</a></li>
              <li><a href="#" className={styles.footerLink}>Cookie Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Customer Service Charter</a></li>
              <li><a href="#" className={styles.footerLink}>Board Charter</a></li>
              <li><a href="#" className={styles.footerLink}>Stakeholder Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className={styles.separator}></div>

        {/* Bottom section */}
        <div className={styles.bottomSection}>
          {/* App download section */}
          <div className={styles.appSection}>
            <h3 className={styles.appTitle}>Download MyBritam App</h3>
            <div className={styles.appButtons}>
              <a href="#" className={styles.appButton}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQ1IiB2aWV3Qm94PSIwIDAgMTUwIDQ1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQ1IiByeD0iNSIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMzAuNSAyMi41QzMwLjUgMjcuNzEgMjYuNzEgMzIgMjEuNSAzMkMxNi4yOSAzMiAxMi41IDI3LjcxIDEyLjUgMjIuNUMxMi41IDE3LjI5IDE2LjI5IDEzIDIxLjUgMTNDMjYuNzEgMTMgMzAuNSAxNy4yOSAzMC41IDIyLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSI0NSIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSJ3aGl0ZSI+RG93bmxvYWQgb24gdGhlPC90ZXh0Pgo8dGV4dCB4PSI0NSIgeT0iMzEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIj5BcHAgU3RvcmU8L3RleHQ+Cjwvc3ZnPgo=" alt="Download on the App Store" />
              </a>
              <a href="#" className={styles.appButton}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQ1IiB2aWV3Qm94PSIwIDAgMTUwIDQ1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQ1IiByeD0iNSIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMjUgMTBMMzAgMTVMMjUgMjBMMjAgMTVMMjUgMTBaIiBmaWxsPSIjRkY2NTAwIi8+CjxwYXRoIGQ9Ik0yNSAyMEwzMCAyNUwyNSAzMEwyMCAyNUwyNSAyMFoiIGZpbGw9IiNGRkM0MDAiLz4KPHA="
 alt="Get it on Google Play" />
              </a>
            </div>
          </div>

          {/* Right side content */}
          <div className={styles.rightSection}>
            {/* Social media icons */}
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Copyright and regulation text */}
            <div className={styles.legalText}>
              <div className={styles.avatar}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGRkY4REMiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNMTAgMzJjMC02IDQtMTAgMTAtMTBzMTAgNCAxMCAxMCIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K" alt="Avatar" />
              </div>
              <div className={styles.textContent}>
                <p className={styles.copyright}>© 2025 Britam. All Rights Reserved.</p>
                <p className={styles.regulation}>Regulated by the Insurance Regulatory Authority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;