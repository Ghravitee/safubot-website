import solution from "../assets/solution-box-overlay.svg";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";

export default function RevenueSection() {
  return (
    <section id="revenue" className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 text-center"
        >
          Revenue <span className="text-[#3B82F6]">Share Model</span>
        </motion.h2>

        <div className="rounded-xl p-4">
          <motion.p
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg mb-4 text-center"
          >
            We reward our community directly. A portion of all trading fees goes
            to:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <motion.div
              variants={slideInFromLeft(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg text-center relative"
              style={{
                zIndex: 1,
                backgroundColor: "#ffffff03",
                border: "1px solid #a1aee526",
                overflow: "hidden",
                boxShadow: "inset 0 0 50px #a1aee514",
              }}
            >
              <div className="absolute inset-0 grad -z-1 bg-repeat bg-cover bg-center">
                <img
                  src={solution}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Revenue Share Pool</h3>
              <p className="text-gray-400">for $BOLT &amp; $SAFU holders</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={slideInFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg text-center relative"
              style={{
                zIndex: 1,
                backgroundColor: "#ffffff03",
                border: "1px solid #a1aee526",
                overflow: "hidden",
                boxShadow: "inset 0 0 50px #a1aee514",
              }}
            >
              <div className="absolute inset-0 grad -z-1 bg-repeat bg-cover bg-center">
                <img
                  src={solution}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Platform Development Fund
              </h3>
              <p className="text-gray-400">to keep building better tools</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={slideInFromRight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg text-center relative"
              style={{
                zIndex: 1,
                backgroundColor: "#ffffff03",
                border: "1px solid #a1aee526",
                overflow: "hidden",
                boxShadow: "inset 0 0 50px #a1aee514",
              }}
            >
              <div className="absolute inset-0 grad -z-1 bg-repeat bg-cover bg-center">
                <img
                  src={solution}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Growth</h3>
              <p className="text-gray-400">
                bounties, partnerships, and giveaways
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
