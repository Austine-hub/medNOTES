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
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/online-pharmacy" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/accounts" element={<AccountCards />} />

          {/* ✅ Pass diagrams as props */}
          <Route
            path="/pharmco"
            element={<Pharmacology diagrams={pharmaDiagrams} />}
          />

          {/* ✅ 404 inside layout (if you want header/footer on 404) */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Example: routes outside MainLayout (e.g. login page) */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

