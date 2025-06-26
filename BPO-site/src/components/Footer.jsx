import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        
       
        <div>
          <h2 className="text-2xl font-bold mb-3">NexAn</h2>
          <p className="text-gray-400">
            Your trusted partner in Business Process Outsourcing. We deliver efficient, scalable, and customized solutions worldwide.
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Mail /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} NexAn Global Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
