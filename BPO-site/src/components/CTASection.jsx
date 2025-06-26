import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-[#0f172a] text-center">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-[#4fc3f7] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          className="text-lg text-slate-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let NexAn Global Services be your trusted partner in growth. Reach out to us today!
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-[#4fc3f7] text-[#0f172a] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#38bdf8] transition"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Book a Free Consultation
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
