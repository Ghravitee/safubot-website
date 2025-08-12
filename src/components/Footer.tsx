import logo from "../assets/bolt4.png";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="" className="w-8 h-8" />
            <div className="text-white">
              <p className="text-3xl font-bold tracking-widest">BOLT</p>
              <p>TRADING BOT</p>
            </div>
          </div>

          <div className="flex space-x-6">
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
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Bolt Trading Bot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
