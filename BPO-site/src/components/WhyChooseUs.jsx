import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
  const points = [
    "Proven Track Record in BPO Operations",
    "Highly Trained & Scalable Workforce",
    "Cutting‑edge Infrastructure & Security",
    "Dedicated Account Management",
    "Real‑Time Reporting and Transparency",
    "Flexible & Cost‑effective Solutions",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-16 bg-[#0f172a]" // Deep navy background
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-[#4fc3f7] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why Choose NexAn?
        </motion.h2>

        {/* Sub‑headline */}
        <motion.p
          className="text-lg text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover how our tailored BPO solutions can help elevate your business.
        </motion.p>

        {/* Bullet cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1e293b] border border-[#4fc3f7] p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * idx }}
            >
              <p className="text-gray-100 font-medium">
                <span className="text-[#4fc3f7] mr-1">✔</span>
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
