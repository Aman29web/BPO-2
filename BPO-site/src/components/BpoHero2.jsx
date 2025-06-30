import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components ---
const CustomerSupportIcon = React.memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 text-indigo-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m12 7.5v-1.5m-6-6v-1.5m-6 0h12M6 7.5h12M6 12h12" />
  </svg>
));

const DataAnalyticsIcon = React.memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 text-indigo-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-12a2.25 2.25 0 01-2.25-2.25V3m12.75 0v6.75a2.25 2.25 0 01-2.25 2.25H9.75a2.25 2.25 0 01-2.25-2.25V3m12.75 0l-3.75 3.75m0 0l-3.75-3.75M15 3v6.75" />
  </svg>
));

const CloudServicesIcon = React.memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 text-indigo-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-2.43-4.498 4.5 4.5 0 00-8.32 2.757 4.5 4.5 0 00-4.096 4.096z" />
  </svg>
));

const FinanceIcon = React.memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 text-indigo-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a6 6 0 006 0m-6 0v-6m0 6l6-6m6 6a6 6 0 00-6 0m6 0v-6m0 6l-6-6m-3 18V3.75h6V21m-6 0H3.75m9 0h3.75m-3.75 0V3.75m0 17.25v-6.75a3.375 3.375 0 00-3.375-3.375H9.375a3.375 3.375 0 00-3.375 3.375v6.75" />
  </svg>
));

const HRIcon = React.memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 text-indigo-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.24.232-.487.34-.742m.166-1.086c.163-.333.32-.67.467-1.014a8.25 8.25 0 00.467-3.455c0-1.797-.449-3.476-1.255-4.861a6.375 6.375 0 00-11.964 0A6.375 6.375 0 002.25 12.75a8.25 8.25 0 00.467 3.455c.147.344.294.68.467 1.014m.994-5.21c.12-.24.232-.487.34-.742m-1.432 5.952c.386.195.79.356 1.213.481" />
  </svg>
));

// --- Animated Globe and Icons ---
const HeroAnimation = ({ transformStyle }) => {
  return (
    <div className="hero-animation-container" style={transformStyle}>
      <div className="orbit orbit-1"></div>
      <div className="orbit orbit-2"></div>
      <div className="orbit orbit-3"></div>

      <div className="central-globe">
        <span className="text-4xl font-extrabold tracking-tighter">IN</span>
      </div>

      <div className="service-icon icon-1" title="Customer Support"><CustomerSupportIcon /></div>
      <div className="service-icon icon-2" title="Data Analytics"><DataAnalyticsIcon /></div>
      <div className="service-icon icon-3" title="IT & Cloud Services"><CloudServicesIcon /></div>
      <div className="service-icon icon-4" title="Finance & Accounting"><FinanceIcon /></div>
      <div className="service-icon icon-5" title="HR Outsourcing"><HRIcon /></div>
    </div>
  );
};

export default function HeroSection() {
  const [transformStyle, setTransformStyle] = useState({});
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    if (!heroSection) return;

    let animationFrameId = null;

    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const { left, width } = heroSection.getBoundingClientRect();
        const { clientX } = e;
        const x = ((clientX - left) / width) * 20 - 10;
        setTransformStyle({
          transform: `perspective(1200px) rotateY(${x}deg) rotateX(${-x / 2}deg) scale3d(1, 1, 1)`
        });
      });
    };

    const handleMouseLeave = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setTransformStyle({
          transform: 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
        });
      });
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      <style>{`/* All animation styles are same as previously provided */`}</style>

      <main id="hero-section" ref={heroSectionRef} className="hero-gradient-bg min-h-screen flex items-center text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                Empowering Growth Through <span className="text-indigo-400">Strategic Outsourcing</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
                Leverage India's top talent pool. We provide world-class BPO services, tailored to scale your business and drive efficiency.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg glow-effect">
                  Get a Free Quote
                </a>
                <a href="#services" className="bg-gray-700/50 border border-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Our Services
                </a>
              </div>
            </div>
            <div className="z-0">
              <HeroAnimation transformStyle={transformStyle} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
