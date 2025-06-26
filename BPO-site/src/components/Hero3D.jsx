import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

function FloatingLogo() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#14b8a6" roughness={0.15} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full">
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 4], fov: 45 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[3, 2, 5]} />

        <Suspense fallback={null}>
          <FloatingLogo />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* overlay HTML */}
      {/* <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Welcome to Ameyaa&nbsp;NXT
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-teal-200">
            Blockchain &amp; AI‑powered financial security
          </p>
          <button className="mt-8 px-8 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-lg transition">
            Get&nbsp;Started
          </button>
        </div>
      </div> */}
    </section>
  );
}
