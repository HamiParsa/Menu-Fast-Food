"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-100">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-light tracking-widest text-gray-800">
                <span className="text-amber-400 font-medium">c</span>D
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Premium fast food since 1955.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-600 text-xs font-semibold tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-600 text-xs font-semibold tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FiMapPin size={14} className="text-amber-400" />
                123 Premium St, NYC
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={14} className="text-amber-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <FiMail size={14} className="text-amber-400" />
                hello@mcd.com
              </li>
            </ul>
          </div>

          {/* Social + GitHub */}
          <div>
            <h4 className="text-gray-600 text-xs font-semibold tracking-wider uppercase mb-4">
              Connect
            </h4>
            <a 
              href="https://github.com/HamiParsa/Menu-Fast-Food"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 text-sm transition-colors"
            >
              <FaGithub size={16} />
              Repository
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-300 text-xs">
            © 2025 McD. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}