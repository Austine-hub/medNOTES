import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global layout components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo";

// Page components (route-driven)
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";
import AccountCards from "./pages/AccountCards";

// 🔒 Reserved for future homepage hero/banner
// import Hero from "./components/Hero";

// ✅ App Component
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Global layout: always visible */}
        <Header />
        <Navbar />
        <UserInfo />
        
        {/* Dynamic routed content */}
        <main className="flex-grow">
          <Routes>
            {/* Primary homepage route */}
            <Route path="/" element={<HomePage />} /> 

            {/* Alternate homepage route */}
            <Route path="/online-pharmacy" element={<HomePage />} /> 

            {/* Dedicated routes */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/accounts" element={<AccountCards />} />

            {/* 🔒 Future routes
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/guidelines" element={<PrescriptionGuidelines />} />
            <Route path="/stores" element={<StoreLocatorPage />} />
            <Route path="/team" element={<TeamSection />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/products" element={<ProductGrid />} />
            <Route path="/login" element={<LoginPage />} />
            */}
          </Routes>
        </main>

        {/* Global footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;


