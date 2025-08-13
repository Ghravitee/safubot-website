import { motion } from "framer-motion";
import solution from "../assets/solution-box-overlay.svg";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function RevenueSection() {
  return (
    <section id="revenue" className="container mx-auto px-4 py-6 relative">
      <div className="lg:size-[14rem] rounded-full bg-[#3B82F6] absolute top-[200px] left-[300px]  blur-[150px]"></div>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-2 text-center raj"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Revenue <span className="text-[#3B82F6]">Share Model</span>
        </motion.h2>

        <motion.div
          className="rounded-xl p-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // animate every time in view
        >
          <p className="text-lg mb-4 text-center">
            We reward our community directly. A portion of all trading fees goes
            to:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Revenue Share Pool",
                text: "for $BOLT & $SAFU holders",
              },
              {
                title: "Platform Development Fund",
                text: "to keep building better tools",
              },
              {
                title: "Community Growth",
                text: "bounties, partnerships, and giveaways",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-lg text-center relative"
                style={{
                  zIndex: 1,
                  backgroundColor: "#ffffff03",
                  border: "1px solid #a1aee526",
                  overflow: "hidden",
                  boxShadow: "inset 0 0 50px #a1aee514",
                }}
                variants={itemVariants}
              >
                <div className="absolute inset-0 grad -z-1 bg-repeat bg-cover bg-center">
                  <img
                    src={solution}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 raj">{card.title}</h3>
                <p className="text-gray-400">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
