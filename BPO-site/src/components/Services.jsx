import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Headphones,
  FileText,
  Database,
  Clock,
  Users,
  PhoneCall,
} from "lucide-react";

const services = [
  {
    title: "Customer Support",
    icon: <Headphones className="w-8 h-8 text-[#4fc3f7]" />,
    desc: "24/7 inbound and outbound call handling to enhance your customer satisfaction.",
  },
  {
    title: "Data Entry & Processing",
    icon: <FileText className="w-8 h-8 text-[#4fc3f7]" />,
    desc: "Accurate data entry, cleansing, and processing for all business needs.",
  },
  {
    title: "CRM Management",
    icon: <Database className="w-8 h-8 text-[#4fc3f7]" />,
    desc: "Seamless customer relationship management to improve retention.",
  },
  {
    title: "Virtual Assistance",
    icon: <Clock className="w-8 h-8 text-[#4fc3f7]" />,
    desc: "Skilled virtual assistants to handle your administrative tasks remotely.",
  },
  {
    title: "Lead Generation",
    icon: <PhoneCall className="w-8 h-8 text-[#4fc3f7]" />,
    desc: "High-quality lead generation services to boost your sales pipeline.",
  },
  {
    title: "Back Office Support",
    icon: <Users className="w-8 h-8 text-[#4fc3f7]" />,
    desc: "Efficient handling of back-end operations including billing, HR, and more.",
  },
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-[#0f172a]">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-extrabold text-[#4fc3f7] mb-4"
        >
          Our BPO Services
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          Scalable and expert-driven outsourcing to accelerate your business goals.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#1e293b] rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#4fc3f7] mb-2">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
