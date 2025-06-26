import React from "react";
import { motion } from "framer-motion";

const Industries = () => {
  const industries = [
    "Healthcare",
    "E-Commerce",
    "Banking & Finance",
    "Telecom",
    "Education",
    "Real Estate",
  ];

  return (
    <section className="py-16 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-[#4fc3f7] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Industries We Serve
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              className="bg-[#1e293b] text-[#4fc3f7] px-6 py-3 rounded-full text-sm font-semibold shadow-md"
              initial={{ y: 0 }}
              whileInView={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 2 + i * 0.2,
                ease: "easeInOut",
              }}
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
