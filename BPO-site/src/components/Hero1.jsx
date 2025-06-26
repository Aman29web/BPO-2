import React from "react";

const Hero1 = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/pics/hero7.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Overlay (makes text pop) ── */}
      <div className="absolute inset-0 bg-[#0f172a]/50 mix-blend-multiply" />

      {/* Copy block */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-[#4fc3f7] text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Empowering Businesses with Smart BPO Solutions
        </h1>
        <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
          NexAn Global Services helps you streamline operations, boost customer
          satisfaction, and scale your business efficiently.
        </p>
      </div>
    </section>
  );
};

export default Hero1;
