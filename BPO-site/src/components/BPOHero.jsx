// src/components/SimpleBPOHero.jsx
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/* ---------- 3‑D object ---------- */
function RotatingCube() {
  // Animate rotation every frame
  useFrame(({ clock, scene }) => {
    scene.rotation.y = clock.elapsedTime * 0.3; // gentle 0.3 rad / sec
  });

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial wireframe color="#34d399" /> {/* Tailwind emerald‑400 */}
    </mesh>
  );
}

/* ---------- Hero section ---------- */
export default function SimpleBPOHero() {
  return (
    <section className="relative h-[80vh] w-full bg-slate-900 overflow-hidden">
      {/* 3‑D Canvas (fills the section) */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
        className="absolute inset-0"
      >
        <RotatingCube />
      </Canvas>

      {/* Overlay marketing copy */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            Empowering Businesses with <br />
            <span className="text-emerald-400">Smart BPO Solutions</span>
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-slate-300">
            NexAn Global Services helps you streamline operations, boost customer
            satisfaction, and scale your business efficiently.
          </p>

          <button className="mt-8 px-8 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow transition">
            Learn&nbsp;More
          </button>
        </div>
      </div>
    </section>
  );
}
