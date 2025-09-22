// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";
import AccountCards from "./pages/AccountCards";
import Pharmacology from "./pages/Pharmacology";
import { pharmaDiagrams } from "./data/pharmaDiagrams";
import NotFound from "./pages/NotFound"; // ✅ Add this import

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/online-pharmacy" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/accounts" element={<AccountCards />} />

          {/* ✅ Pharmacology page works now */}
          <Route path="/pharmco" element={<Pharmacology />} />
          <Route path="/pharmco" element={<Pharmacology diagrams={pharmaDiagrams} />} />
              {/* ✅ fallback route */}
          <Route path="*" element={<NotFound />} />


          
        {/* Example: routes outside MainLayout */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
          </Route>
        {/* Example of a route outside MainLayout (e.g. login, dashboard) */}
        {/* <Route path="/login" element={<LoginPage />} /> */}

        {/* 404 Fallback */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

