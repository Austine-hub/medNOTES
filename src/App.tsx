// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ==============================
   📌 Layouts
   ============================== */
import MainLayout from "./layouts/MainLayout";

/* ==============================
   📌 Core Pages
   ============================== */
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import AccountCards from "./pages/AccountCards";
import Pharmacology from "./pages/Pharmacology";
import NotFound from "./pages/NotFound";
import { pharmaDiagrams } from "./data/pharmaDiagrams";

/* ==============================
   📌 Specialty Pages
   ============================== */
import Orthopaedics from "./pages/specialties/Orthopaedics";
import Surgery from "./pages/specialties/Surgery";
import Medicine from "./pages/specialties/Medicine";
import OBGYN from "./pages/specialties/OBGYN";
import Paediatrics from "./pages/specialties/Paediatrics";

/* ==============================
   🔐 Auth Pages (outside MainLayout)
   ============================== */
import Login from "./pages/auth/Login";
// import CreateAccount from "./pages/auth/CreateAccount";
// import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* ==============================
           ✅ Routes wrapped with MainLayout
           (These will show Header, Navbar, Footer, etc.)
        ============================== */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/online-pharmacy" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/accounts" element={<AccountCards />} />

          {/* ✅ Specialty Pages */}
          <Route path="/specialties/Orthopaedics" element={<Orthopaedics />} />
          <Route path="/specialties/Surgery" element={<Surgery />} />
          <Route path="/specialties/Medicine" element={<Medicine />} />
          <Route path="/specialties/OBGYN" element={<OBGYN />} />
          <Route path="/specialties/Paediatrics" element={<Paediatrics />} />

          {/* ✅ Pharmacology (pass diagrams as props) */}
          <Route
            path="/pharmco"
            element={<Pharmacology diagrams={pharmaDiagrams} />}
          />

          {/* ✅ 404 Page with Layout */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ==============================
           🔐 Auth Routes (No MainLayout)
           ============================== */}
        <Route path="/join" element={<Login />} />
        {/* <Route path="/create-account" element={<CreateAccount />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
