// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Global layout */}
      <Header />
      <Navbar />
      <UserInfo />

      {/* Dynamic routed content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;

