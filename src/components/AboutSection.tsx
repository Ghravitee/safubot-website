import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";
import grid from "../assets/ui-bg-overlay-grid.svg";

export default function AboutSection() {
  const features = [
    "Multi-wallet buying with one click.",
    "Instant withdrawals/transfers of ETH and tokens to any wallet.",
    "Full swap integration with MaxTx and token tax support.",
    "Custom buy/sell presets, gas limits, and auto-buy confirmation.",
    "Real-time market updates — new data every block.",
  ];

  return (
    <section
      id="features"
      className="container mx-auto px-4 pt-20 relative overflow-x-hidden"
    >
      <div className="lg:size-[14rem] rounded-full bg-[#3B82F6] absolute top-[200px] left-0 right-0 mx-auto blur-[150px]"></div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center raj">
          Live <span className="text-[#3B82F6]">Features</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((text, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-lg relative ${
                i === 4
                  ? "col-span-2 md:col-start-2 md:col-end-4"
                  : "col-span-2"
              }`}
              style={{
                zIndex: 1,
                gap: "20px",
                backgroundColor: "#ffffff03",
                border: "1px solid #a1aee526",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "inset 0 0 50px #a1aee514",
              }}
              variants={
                i % 2 === 0
                  ? slideInFromLeft(0.2 * i)
                  : slideInFromRight(0.2 * i)
              }
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="absolute inset-0 grad -z-1 bg-repeat bg-cover bg-center">
                <img src={grid} alt="" width={400} height={400} />
              </div>
              <p className="text-gray-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
