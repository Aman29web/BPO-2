import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "CEO, TechCore Solutions",
    feedback:
      "NexAn has streamlined our customer support process with precision. Their team is professional, reliable, and incredibly efficient.",
    image: "/pics/testimonial1.jpg",
  },
  {
    name: "Sophia Allen",
    role: "Operations Head, MediPlus",
    feedback:
      "Their data entry and call support teams are outstanding. We've improved our turnaround time and customer satisfaction significantly.",
    image: "/pics/testimonial2.jpg",
  },
  {
    name: "Rajiv Mehta",
    role: "Managing Director, EduBridge",
    feedback:
      "From onboarding to execution, NexAn exceeded our expectations. They are more than just a service provider — they’re a growth partner.",
    image: "/pics/testimonial3.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-[#4fc3f7] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover border border-[#4fc3f7]"
                />
                <div>
                  <p className="font-semibold text-[#4fc3f7]">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-200 italic">“{t.feedback}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
