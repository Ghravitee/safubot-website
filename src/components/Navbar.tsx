import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/bolt4.png";

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavbarProps) {
  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center max-w-7xl">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="" className="w-8 h-8" />
        <div className="text-white">
          <p className="lg:text-3xl text-xl font-bold tracking-widest">BOLT</p>
          <p>TRADING BOT</p>
        </div>
      </div>

      <div className="hidden md:flex space-x-8">
        <a href="#why-bolt" className="hover:text-[#3B82F6] transition">
          Why Bolt
        </a>
        <a href="#features" className="hover:text-[#3B82F6] transition">
          Features
        </a>
        <a href="#tokenomics" className="hover:text-[#3B82F6] transition">
          Tokenomics
        </a>
        <a href="#roadmap" className="hover:text-[#3B82F6] transition">
          Roadmap
        </a>
      </div>

      <div className="hidden md:block">
        <a
          href="https://t.me/safubolt"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">Get Started</span>
        </a>
      </div>

      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-800 z-50 p-6 space-y-4">
          <a href="#about" className="block hover:text-purple-400 transition">
            About
          </a>
          <a
            href="#features"
            className="block hover:text-purple-400 transition"
          >
            Features
          </a>
          <a
            href="#tokenomics"
            className="block hover:text-purple-400 transition"
          >
            Tokenomics
          </a>
          <a href="#roadmap" className="block hover:text-purple-400 transition">
            Roadmap
          </a>
          <button className="bg-purple-600 hover:bg-purple-700 w-full py-2 rounded-full font-medium transition">
            Launch App
          </button>
        </div>
      )}
    </nav>
  );
}
