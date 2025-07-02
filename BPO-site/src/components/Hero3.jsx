import React from "react";
import { motion } from "framer-motion";
import AnimatedWaves from "./AnimationWave";

// const stats = [
//   { label: "Years Experience", value: "10+" },
//   { label: "Projects Delivered", value: "12K+" },
//   { label: "Client Satisfaction", value: "97%" },
// ];

const Hero3 = () => {
  return (
    <section className="relative py-30 w-full overflow-hidden bg-gradient-to-b from-[#0a0f24] to-[#141e3c] text-white">
      <AnimatedWaves />
      {/* Animated Glowing Ring on right */}
      <div className="absolute -right-16 top-10 hidden md:block">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="w-[300px] h-[300px] rounded-full border-4 border-cyan-400/50"
          style={{
            boxShadow: "0 0 40px 10px rgba(34,211,238,0.3)",
          }}
        />
      </div>

      {/* Copy */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          
           Empowering Businesses <span className="text-cyan-400">Twith Smart</span> BPO Solutions{" "}
          <span className="text-cyan-400">Smart Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-8"
        >
         NexAn Global Services helps you streamline operations, boost customer satisfaction, and scale your business efficiently.
        </motion.p>

        {/* Buttons */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button className="px-6 py-3 bg-cyan-400 text-[#0a0f24] font-bold rounded-full hover:bg-cyan-300 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-[#0a0f24] transition">
            Contact Sales
          </button>
        </motion.div> */}

        {/* Stats Row */}
        {/* <div className="flex flex-wrap justify-center gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">{item.value}</div>
              <div className="text-slate-300 text-sm md:text-base">{item.label}</div>
            </motion.div>
          ))}
        </div> */}
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,0 C600,120 600,0 1200,100 L1200,120 L0,120 Z"
            fill="#0a0f24"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero3;
