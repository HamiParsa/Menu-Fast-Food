"use client";

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-[100px] bg-black text-white py-8 relative overflow-hidden">
      {/* Floating sparkles in background */}
      <span className="absolute top-2 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-float"></span>
      <span className="absolute top-16 right-20 w-3 h-3 bg-red-400 rounded-full opacity-40 animate-float delay-200"></span>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Company information */}
        <p className="text-center md:text-left font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-pink-500">
          © 2025 FastBites. Crafted with ❤️. All rights reserved.
        </p>

        {/* Social media icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
            <FaInstagram size={22} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors duration-300">
            <FaFacebookF size={22} />
          </a>
          <a href="#" className="hover:text-sky-400 transition-colors duration-300">
            <FaTwitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
