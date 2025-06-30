import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- Icon Wrapper ---
const IconWrapper = ({ children, title, className }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    title={title}
    className={`service-icon ${className}`}
  >
    {children}
  </motion.div>
);

// --- BPO-Relevant Icons ---
const CustomerSupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14.25a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 12h-3v3m15 0v-3h-3" />
  </svg>
);

const CloudServiceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20h4a4 4 0 004-4v-1a4 4 0 00-4-4h-.26a8 8 0 10-11.49 5.64" />
  </svg>
);

const FinanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h3M3 6h6m3-2h4a2 2 0 012 2v12a2 2 0 01-2 2h-4m-3-2H6a2 2 0 01-2-2V6a2 2 0 012-2h4" />
  </svg>
);

const DataEntryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4h16M4 10h16M4 16h10" />
  </svg>
);

const HRIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 6c-4.418 0-8 2.239-8 5v2h16v-2c0-2.761-3.582-5-8-5z" />
  </svg>
);

const icons = [
  { title: "Customer Support", component: <CustomerSupportIcon />, className: "icon-1" },
  { title: "Cloud Services", component: <CloudServiceIcon />, className: "icon-2" },
  { title: "Finance & Accounting", component: <FinanceIcon />, className: "icon-3" },
  { title: "Data Entry", component: <DataEntryIcon />, className: "icon-4" },
  { title: "HR Outsourcing", component: <HRIcon />, className: "icon-5" },
];

// --- Central Animation Component ---
const HeroAnimation = ({ transformStyle }) => (
  <div className="hero-animation-container" style={transformStyle}>
    <div className="orbit orbit-1" />
    <div className="orbit orbit-2" />
    <div className="orbit orbit-3" />
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="central-globe text-white font-bold text-2xl"
    >
      NexAn
    </motion.div>
    {icons.map((icon, i) => (
      <IconWrapper key={i} title={icon.title} className={icon.className}>
        {icon.component}
      </IconWrapper>
    ))}
  </div>
);

export default function HeroSection() {
  const [transformStyle, setTransformStyle] = useState({});
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const hero = heroSectionRef.current;
    if (!hero) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const { left, width } = hero.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 20 - 10;
        setTransformStyle({
          transform: `perspective(1200px) rotateY(${x}deg) rotateX(${-x / 2}deg)`
        });
      });
    };

    const resetTransform = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setTransformStyle({
          transform: "perspective(1200px) rotateY(0deg) rotateX(0deg)"
        });
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", resetTransform);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <div ref={heroSectionRef} className="bg-[#0f172a] text-white min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Empowering Growth Through{" "}
            <span className="text-indigo-400">Strategic Outsourcing</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-lg">
            Leverage India’s top talent pool. We provide world-class BPO
            services, tailored to scale your business and drive efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105 shadow-md shadow-indigo-800/30"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="bg-[#1e293b] border border-white/20 hover:bg-[#334155] text-white font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HeroAnimation transformStyle={transformStyle} />
        </motion.div>
      </div>

      <style>{`
        .hero-animation-container {
          position: relative;
          height: 400px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }

        .central-globe {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #6366f1, #312e81);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.5), inset 0 0 30px rgba(99, 102, 241, 0.4);
          animation: pulse 6s ease-in-out infinite;
        }

        .orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(148, 163, 184, 0.1);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-1 { width: 280px; height: 280px; animation: spin 30s linear infinite; }
        .orbit-2 { width: 400px; height: 400px; animation: spinReverse 40s linear infinite; }
        .orbit-3 { width: 520px; height: 520px; animation: spin 50s linear infinite; }

        .service-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(129, 140, 248, 0.2);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(6px);
        }

        .icon-1 { animation: orbitPath1 20s linear infinite; }
        .icon-2 { animation: orbitPath2 22s linear infinite; }
        .icon-3 { animation: orbitPath3 18s linear infinite; }
        .icon-4 { animation: orbitPath4 24s linear infinite; }
        .icon-5 { animation: orbitPath5 26s linear infinite; }

        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes orbitPath1 {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg); }
        }

        @keyframes orbitPath2 {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg); }
        }

        @keyframes orbitPath3 {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(240px) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(240px) rotate(-360deg); }
        }

        @keyframes orbitPath4 {
          from { transform: translate(-50%, -50%) rotate(90deg) translateX(140px) rotate(-90deg); }
          to { transform: translate(-50%, -50%) rotate(450deg) translateX(140px) rotate(-450deg); }
        }

        @keyframes orbitPath5 {
          from { transform: translate(-50%, -50%) rotate(180deg) translateX(180px) rotate(-180deg); }
          to { transform: translate(-50%, -50%) rotate(540deg) translateX(180px) rotate(-540deg); }
        }
      `}</style>
    </div>
  );
}
