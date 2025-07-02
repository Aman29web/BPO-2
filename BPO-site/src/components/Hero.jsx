import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const Hero3 = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center overflow-hidden px-4 md:px-12 py-10 md:h-[500px] bg-[#0f172a]">
      {/* Left Lottie Animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 h-64 md:h-full mb-8 md:mb-0 md:mt-24 flex justify-center items-center"
      >
        <Player
          autoplay
          loop
          src="/pics/A1.json"
          className="w-full h-full rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-16"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#4fc3f7] mb-4 text-center md:text-left">
            Your Trusted BPO Partner
          </h1>
          <p className="text-base md:text-lg text-slate-200 mb-4 text-center md:text-left">
            At NexAn Global Services, we specialize in delivering reliable,
            scalable, and efficient business process outsourcing solutions.
          </p>
          <p className="text-slate-300 mb-3 text-center md:text-left">
            ✔ Inbound &amp; Outbound Call Support
          </p>
          <p className="text-slate-300 mb-3 text-center md:text-left">
            ✔ Data Entry &amp; Processing
          </p>
          <p className="text-slate-300 mb-3 text-center md:text-left">
            ✔ 24/7 Customer Service
          </p>
          <p className="text-slate-400 text-center md:text-left">
            Our expert team ensures seamless communication and data handling, so
            you can focus on growing your business.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3;
