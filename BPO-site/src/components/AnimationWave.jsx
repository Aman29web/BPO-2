import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeadset, FaComments, FaPhoneAlt, FaUsers, FaClock } from "react-icons/fa";

const W = 400;
const H = 50;
const wavesCount = 8;

const AnimatedWave = () => {
  const [time, setTime] = useState(0);
  const requestRef = useRef();

  const animate = () => {
    setTime((prev) => prev + 0.01);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  /**
   * Thin wave hugging the bottom.
   * - Baseline near bottom: H - 5
   * - Small amplitude: 2-4px
   */
  const buildPath = (amp = 2, yShift = 0, phase = 0) => {
    const waves = 100;
    const step = W / waves;
    let d = `M0 ${H - 2 + yShift}`;
    for (let i = 0; i <= waves; i++) {
      const x = i * step;
      const y =
        H - 5 +
        yShift +
        Math.sin((i / waves) * Math.PI * 2 + time + phase) * amp;
      d += ` L${x} ${y}`;
    }
    d += ` L${W} ${H} L0 ${H} Z`;
    return d;
  };

  const bubbles = [
    { icon: FaHeadset, text: "Support", color: "#142c63", glow: "#142c63", delay: 0 },
    { icon: FaComments, text: "Chat", color: "#d2d811", glow: "#d2d811", delay: 1 },
    { icon: FaPhoneAlt, text: "Calls", color: "#00e676", glow: "#00c853", delay: 2 },
    { icon: FaUsers, text: "Team", color: "#40c4ff", glow: "#00b0ff", delay: 3 },
    { icon: FaClock, text: "24/7", color: "#d500f9", glow: "#aa00ff", delay: 4 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Waves background */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#0072ff" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#0088ff" />
          </linearGradient>
          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#00bfff" />
          </linearGradient>
        </defs>

        {[...Array(wavesCount)].map((_, i) => (
          <path
            key={i}
            d={buildPath(3 + i * 3, i * 2, i * 1.5)}
            fill={
              i % 3 === 0
                ? "url(#waveGrad1)"
                : i % 3 === 1
                ? "url(#waveGrad2)"
                : "url(#waveGrad3)"
            }
            opacity={0.25 - i * 0.02}
          />
        ))}
      </svg>

      {/* Floating bright bubbles */}
      {bubbles.map(({ icon: Icon, text, color, glow, delay }, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center justify-center text-white font-semibold text-sm pointer-events-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 25}%`,
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: `${color}e6`,
            boxShadow: `0 0 20px ${glow}, 0 0 30px ${glow}`,
            backdropFilter: "blur(6px)",
            border: `2px solid ${glow}`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.15, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            delay,
            repeat: Infinity,
          }}
        >
          <Icon size={28} className="mb-1" />
          <span>{text}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedWave;