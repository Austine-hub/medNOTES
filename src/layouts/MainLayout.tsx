// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";

import styles from "./MainLayout.module.css";

const MainLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      {/* Global layout */}
      <header className={styles.headerWrapper}>
        <Header />
      </header>

      <nav className={styles.navbarWrapper}>
        <Navbar />
      </nav>

      <div className={styles.userInfoWrapper}>
        {/* ✅ Zustand handles user data — no props needed */}
        <UserInfo />
      </div>

      {/* Dynamic routed content */}
      <main className={styles.main} role="main">
        <Outlet />
      </main>

      <footer className={styles.footerWrapper}>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;



