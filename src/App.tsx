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
import bot5 from "./assets/bot-5.webp";
import bot4 from "./assets/bot-4.webp";

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
        <div className="relative">
          <img
            src={bot5}
            alt=""
            className="hidden lg:block absolute -top-0 -left-[15rem]
      w-[300px] h-[300px]     /* base size */
      sm:w-[300px] sm:h-[300px] /* small screens */
      lg:w-[600px] lg:h-[600px] /* large screens */
      object-contain
    "
          />
          <img
            src={bot4}
            alt=""
            className="hidden lg:block absolute top-0 -right-[15rem]
      w-[300px] h-[300px]     /* base size */
      sm:w-[300px] sm:h-[300px] /* small screens */
      lg:w-[600px] lg:h-[600px] /* large screens */
      object-contain -z-20
    "
          />

          <AboutSection />
          <TokenomicsSection />
        </div>
        <RevenueSection />
        <RoadmapSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
