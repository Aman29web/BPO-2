import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Globe, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      icon: <Briefcase className="text-[#4fc3f7] w-6 h-6" />,
      title: "10+ Years Experience",
      desc: "Decade of delivering trusted BPO solutions globally.",
    },
    {
      icon: <Users className="text-[#4fc3f7] w-6 h-6" />,
      title: "Skilled Workforce",
      desc: "Professionals trained for high-performance delivery.",
    },
    {
      icon: <Globe className="text-[#4fc3f7] w-6 h-6" />,
      title: "Global Reach",
      desc: "Serving clients across diverse sectors & geographies.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#4fc3f7] mb-6">
            About NexAn Global Services
          </h2>
          <p className="text-gray-300 mb-4">
            NexAn Global Services empowers companies with reliable and efficient BPO operations, helping them scale without compromising quality.
          </p>
          <p className="text-gray-400 mb-8">
            Our teams specialize in creating seamless workflows and handling complex processes with precision—so you can focus on growth.
          </p>

          <div className="space-y-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[#1e293b] transition"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * i }}
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-md font-semibold text-[#4fc3f7]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section (No animation) */}
        <div>
          <img
            src="/pics/about.jpg"
            alt="About NextAn"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
