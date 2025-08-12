import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  fadeIn,
  zoomIn,
} from "../utils/motion"; // Adjust import path

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-10 hero-bg min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full mb-6"
        >
          <span className="lg:text-[1.5rem]">Bolt Trading Bot</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-6xl font-bold mb-6"
        >
          The Future of{" "}
          <span className="text-[#3B82F6]">Decentralized Token</span> Trading
        </motion.h1>

        {/* First Paragraph */}
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 0.8)}
          initial="hidden"
          animate="show"
          className="text-lg lg:text-xl text-white mb-10"
        >
          In the fast-paced world of DeFi, speed, precision, and security make
          the difference between a winning trade and a missed opportunity.
          That’s why we built Bolt Trading Bot — a lightning-fast, intuitive,
          and fully optimized trading solution designed for the SafuLauncher
          platform and beyond.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          variants={fadeIn("up", "tween", 0.6, 0.8)}
          initial="hidden"
          animate="show"
          className=" text-base lg:text-xl text-gray-400 mb-10"
        >
          Our mission is simple:{" "}
          <span className="font-bold">
            Make token trading smarter, faster, and safer — for everyone.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={zoomIn(0.8, 0.6)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="https://t.me/safubolt"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex w-fit items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
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
            <span className="relative">Launch Bot</span>
          </a>
          <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full font-medium transition">
            View Token on Etherscan
          </button>
        </motion.div>
      </div>
    </section>
  );
}
