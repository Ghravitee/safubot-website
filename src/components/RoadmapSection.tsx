import { motion } from "framer-motion";
import grid from "../assets/ui-bg-overlay-grid.svg";
import { slideInFromLeft, slideInFromRight } from "../utils/motion"; // adjust path if needed

export default function RoadmapSection() {
  const phases = [
    {
      title: "Phase 1 — Foundation (Live)",
      items: [
        "Beta launch",
        "Multi-wallet buying & integrated withdrawals",
        "Uniswap V2 compatibility",
      ],
    },
    {
      title: "Phase 2 — Expansion (1–2 Months)",
      items: [
        "Tiered 0% fee system",
        "PnL & analytics dashboard",
        "Mobile optimization",
      ],
    },
    {
      title: "Phase 3 — Innovation (Q4)",
      items: [
        "Copy trading & automated strategies",
        "NFT trader badges & gamification",
        "Multi-chain expansion beyond Ethereum",
      ],
    },
  ];

  return (
    <section id="roadmap" className="container mx-auto px-4 py-20 relative">
      {/* Full height background grid */}
      <div className="absolute inset-0 -z-50">
        <img
          src={grid}
          alt="grid background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Project <span className="text-[#3B82F6]">Roadmap</span>
        </h2>

        <div className="relative">
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const isReached = index < 1;

              return (
                <motion.div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? "md:pr-24" : "md:pl-24"
                  }`}
                  variants={
                    index % 2 === 0
                      ? slideInFromLeft(0.2)
                      : slideInFromRight(0.2)
                  }
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div
                    className="relative z-10 rounded-xl p-6"
                    style={{
                      backgroundColor: "#ffffff03",
                      border: "1px solid #a1aee526",
                      overflow: "hidden",
                      boxShadow: "inset 0 0 50px #a1aee514",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-[#3B82F6]">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          {isReached ? (
                            <svg
                              className="w-5 h-5 text-[#3B82F6] mr-2 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-500 mr-2 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="9"
                                strokeWidth="2"
                                stroke="currentColor"
                              />
                            </svg>
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
