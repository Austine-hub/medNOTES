import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";

import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      {/* Global layout */}
      <header className={styles.headerWrapper}>
        <Header />
      </header>

      <div className={styles.userInfoWrapper}>
        <UserInfo />
      </div>

      <nav className={styles.navbarWrapper}>
        <Navbar />
      </nav>

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

