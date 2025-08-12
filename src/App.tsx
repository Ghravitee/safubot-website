import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import TokenomicsSection from "./components/TokenomicsSection";
import RevenueSection from "./components/RevenueSection";
import RoadmapSection from "./components/RoadmapSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" text-gray-100 min-h-screen">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className={mobileMenuOpen ? "blur-sm" : ""}>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />

        <TokenomicsSection />
        <RevenueSection />
        <RoadmapSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
