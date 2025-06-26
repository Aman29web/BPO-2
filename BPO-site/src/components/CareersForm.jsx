import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    resumeBase64: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, resumeBase64: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <section className="py-20 bg-[#0f172a]">
      {/* Heading outside the form box */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Career Application Form
      </h1>

      <div className="max-w-xl mx-auto p-6 bg-[#1e293b] rounded-2xl shadow-md text-white">
        <h2 className="text-xl font-medium mb-4 text-center text-[#4fc3f7]">
          Apply for Your Desired Role
        </h2>

        {submitted ? (
          <p className="text-green-400 text-center">Application submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-slate-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-slate-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-slate-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
            />
            <input
              name="course"
              type="text"
              placeholder="Course / Field of Study"
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-slate-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
            />
            <textarea
              name="message"
              placeholder="Optional Message"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-slate-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
            />
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-[#4fc3f7] file:text-[#0f172a] hover:file:bg-[#38bdf8]"
            />
            <button
              type="submit"
              className="bg-[#4fc3f7] text-[#0f172a] py-2 px-6 rounded font-semibold hover:bg-[#38bdf8] transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
