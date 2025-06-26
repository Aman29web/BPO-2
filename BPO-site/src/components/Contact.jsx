import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#4fc3f7] mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-6">
            We'd love to hear from you. Whether you have a question about our services or want to partner with us, our team is ready to help.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-[#4fc3f7]" />
              <p className="text-slate-200">info@nexanglobal.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-[#4fc3f7]" />
              <p className="text-slate-200">1234 567 89</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-[#4fc3f7]" />
              <p className="text-slate-200">Kanpur</p>
            </div>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1e293b] p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-transparent border border-slate-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-transparent border border-slate-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-transparent border border-slate-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
          />
          <button
            type="submit"
            className="bg-[#4fc3f7] hover:bg-[#38bdf8] text-[#0f172a] font-semibold px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
