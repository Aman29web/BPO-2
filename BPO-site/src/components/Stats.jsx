import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Clients Worldwide", value: "150+" },
    { label: "Projects Completed", value: "1200+" },
    { label: "Hours of Support", value: "24/7" },
    { label: "Years Experience", value: "10+" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-300 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
