import { motion } from "framer-motion";
import bot1 from "../assets/bot-1.webp";
import grid from "../assets/ui-bg-overlay-grid.svg";

import {
  slideInFromTop,
  slideInFromLeft,
  fadeIn,
  zoomIn,
} from "../utils/motion"; // Adjust import path

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-4 hero-bg min-h-screen flex flex-col relative overflow-hidden">
      <div className="lg:size-[14rem] size-[4rem] -z-50 rounded-full  bg-[#3B82F6] absolute top-[100px] lg:top-[200px] left-0 right-0 mx-auto blur-[150px]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto relative z-50">
        <div className="flex flex-col items-center lg:items-start px-4 relative">
          {/* Badge */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{
              zIndex: 1,
              gap: "20px",
              backgroundColor: "#ffffff03",
              border: "1px solid #a1aee526",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "inset 0 0 50px #a1aee514",
            }}
          >
            <div className="absolute inset-0 grad bg-repeat bg-cover bg-center">
              <img src={grid} alt="" width={400} height={400} />
            </div>
            <span className="lg:text-[1.5rem]">Bolt Trading Bot</span>
          </motion.div>
          {/* Heading */}
          <motion.h1
            variants={slideInFromLeft(0.2)}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-6xl font-bold mb-4 text-center lg:text-left raj"
          >
            The Future of{" "}
            <span className="text-[#3B82F6]">Decentralized Token</span> Trading
          </motion.h1>
          {/* First Paragraph */}
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 0.8)}
            initial="hidden"
            animate="show"
            className="text-lg lg:text-xl text-white mb-4 text-center lg:text-left relative z-40"
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
            className=" text-base lg:text-xl text-gray-400 mb-4 text-center lg:text-left"
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
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 relative z-50"
          >
            <a
              href="https://t.me/safubolt"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center w-[200px] px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
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
            <a
              href=""
              className="bg-indigo-600 text-white border-2 border-white text-lg px-8 py-2 flex items-center justify-center rounded-full font-medium transition w-[200px]"
            >
              Buy $Bolt
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            src={bot1}
            alt="Bolt Trading Bot"
            className="
      w-[300px] h-[300px]     /* base size */
      sm:w-[300px] sm:h-[300px] /* small screens */
      lg:w-[600px] lg:h-[600px] /* large screens */
      object-contain
    "
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
