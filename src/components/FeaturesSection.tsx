import solution from "../assets/solution-box-overlay.svg";
import {
  FiRefreshCw,
  FiDollarSign,
  FiClock,
  FiBarChart2,
} from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";
// import bot2 from "../assets/bot-2.webp";

export default function FeaturesSection() {
  const features = [
    {
      title: "Cross-Platform Trading Power",
      description:
        "Trade any token listed on SafuLauncher, even after it migrates to Uniswap V2 liquidity pools. Gain early access to promising projects before the crowd",
      icon: <FiRefreshCw className="text-white" size={24} />,
    },
    {
      title: "Unlimited Wallets for Smart Strategies",
      description:
        "Create and manage as many wallets as you want — perfect for executing multiple buy strategies at the same time.",
      icon: <FaWallet className="text-white" size={28} />,
    },
    {
      title: "100% SAFU",
      description:
        "Your private keys stay yours. Protected with industry-grade encryption — even our dev team can’t access them.",
      icon: <FiDollarSign className="text-white" size={28} />,
    },
    {
      title: "Beyond SafuLauncher",
      description:
        "Trade any Uniswap V2 token, whether or not it’s listed on SafuLauncher.",
      icon: <FiClock className="text-white" size={28} />,
    },
    {
      title: "Clean, Essential Data Only",
      description:
        "We strip away the noise and show you the exact market info you need to make fast, informed decisions.",
      icon: <FiBarChart2 className="text-white" size={28} />,
    },
    {
      title: "Fee Advantage for Holders",
      description: "Standard Fee: 0.5% per transaction",
      description2:
        "0% fees for $BOLT & $SAFU token holders (details coming soon)",
      icon: <FiBarChart2 className="text-white" size={28} />,
    },
  ];

  return (
    <section id="why-bolt" className="container mx-auto px-4 py-10 relative">
      <div className="lg:size-[14rem] rounded-full bg-[#3B82F6] absolute top-[200px] left-0  blur-[150px]"></div>
      <div className="lg:size-[14rem] rounded-full bg-[#3B82F6] absolute bottom-20 right-0  blur-[150px]"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center raj">
          Why Choose <span className="text-[#3B82F6]">Bolt Trading Bot?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl relative flex flex-col justify-between
                ${index === 0 ? "lg:col-span-2" : ""}
                ${index === 5 ? "lg:col-span-1 lg:col-start-2" : "col-span-1"}
              `}
              style={{
                zIndex: 1,
                backgroundColor: "#ffffff03",
                border: "1px solid #a1aee526",
                overflow: "hidden",
                boxShadow: "inset 0 0 50px #a1aee514",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }} // animates every time it's in view
            >
              <div className="absolute inset-0 grad -z-1 bg-repeat bg-cover bg-center">
                <img
                  src={solution}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="text-3xl p-3 rounded-full border border-white/40">
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-xl mb-2 raj">{feature.title}</h2>
                  {feature.description2 ? (
                    <ul className="list-disc list-inside text-sm text-[#a0aee5] space-y-1">
                      <li>{feature.description}</li>
                      <li>{feature.description2}</li>
                    </ul>
                  ) : (
                    <p
                      className={` text-[#a0aee5] ${
                        index === 0 ? "max-w-md" : ""
                      }`}
                    >
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
