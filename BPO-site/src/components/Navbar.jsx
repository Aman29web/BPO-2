import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-md shadow-md fixed w-full z-10">
      <div className="w-full px-0">
        <div className="flex justify-between h-16 items-center max-w-7xl mx-auto px-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 ml-0">
            <a href="/">
              <img src="/pics/logo.png" alt="Logo" className="h-16 w-auto" />
            </a>
            <span className="font-semibold text-white">
              NexAn Global Services
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-white hover:text-[#ed4a0d] font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:text-[#ed4a0d] font-medium">
              Services
            </a>
            <a href="#" className="text-white hover:text-[#ed4a0d] font-medium">
              About
            </a>
            <a href="#" className="text-white hover:text-[#ed4a0d] font-medium">
              Contact
            </a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-[#ed4a0d] text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 shadow">
          <a href="#" className="block text-white hover:text-[#ed4a0d]">
            Home
          </a>
          <a href="#" className="block text-white hover:text-[#ed4a0d]">
            Services
          </a>
          <a href="#" className="block text-white hover:text-[#ed4a0d]">
            About
          </a>
          <a href="#" className="block text-white hover:text-[#ed4a0d]">
            Contact
          </a>
          <a
            href="#"
            className="block bg-[#ed4a0d] text-white text-center py-2 mt-2 rounded-lg hover:bg-orange-700"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
