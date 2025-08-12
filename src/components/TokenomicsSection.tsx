import { motion } from "framer-motion";
import solution from "../assets/ui-bg-overlay-grid.svg";

export default function TokenomicsSection() {
  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  };

  // Each child item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="tokenomics" className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
          <span className="text-[#3B82F6]">Tokenomics</span>
        </h2>

        <div
          className="rounded-2xl p-8 relative overflow-hidden"
          style={{
            backgroundColor: "#ffffff05",
            border: "1px solid #a1aee526",
            boxShadow: "inset 0 0 50px #3B82F620",
          }}
        >
          {/* Glowing grid overlay */}
          <img
            src={solution}
            alt=""
            className="w-full h-full absolute inset-0 object-cover"
          />

          <motion.div
            className="grid md:grid-cols-2 gap-y-12 gap-x-16 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // animate every time in view
          >
            {/* Token Details */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8 text-[#3B82F6] tracking-wide">
                Token Details
              </h3>
              <motion.ul
                className="space-y-4 text-base"
                variants={containerVariants}
              >
                {[
                  ["Token Name:", "$BOLT"],
                  ["Ticker:", "BOLT"],
                  ["Total Supply:", "10,000,000 $BOLT"],
                  ["Tax:", "5% Buy / 5% Sell"],
                ].map(([label, value], idx) => (
                  <motion.li
                    key={idx}
                    className="flex justify-between border-b border-white/10 pb-3"
                    variants={itemVariants}
                  >
                    <span className="text-gray-400">{label}</span>
                    <span className="font-semibold text-white text-lg">
                      {value}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Tax Allocation */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8 text-[#3B82F6] tracking-wide">
                Tax Allocation
              </h3>
              <motion.div className="space-y-6" variants={containerVariants}>
                {[
                  ["Development & Maintenance", "50%"],
                  ["Liquidity Support", "30%"],
                  ["Marketing & Growth", "20%"],
                ].map(([label, value], idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <div className="flex justify-between mb-2 text-base">
                      <span className="text-gray-300">{label}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-[#3B82F6] to-purple-500 h-3 rounded-full"
                        style={{ width: value }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-white text-center mt-4"
            variants={itemVariants}
          >
            Team Allocation: None — 100% fair launch via SafuLauncher
          </motion.p>
        </div>
      </div>
    </section>
  );
}
