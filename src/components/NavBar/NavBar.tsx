"use client";
import Image from "next/image";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { MdRestaurantMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { useCartStore } from "@/store/cartStore";
import { IoFastFoodOutline } from "react-icons/io5";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function UltraFancyNavBar() {
  const totalItems = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const [open, setOpen] = useState(false);

  const handleMobileLinkClick = () => setOpen(false);

  return (
    <div  className="fixed top-5 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 h-[100px] z-[9999]">
      {/* Glassmorphic navbar container */}
      <div className="w-full h-full bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl flex justify-between items-center px-8 animate-slideDown">
        
        {/* Logo (desktop only) */}
        <div className="text-2xl hidden md:block font-extrabold text-amber-500 animate-floatText cursor-pointer hover:scale-110 transition-transform duration-300">
          McDonalds
        </div>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex text-lg gap-12 font-medium">
          {[
            { href: "/", label: "Home", icon: <RiHomeSmile2Fill className="text-xl text-green-400" /> },
            { href: "/cart", label: "Cart", icon: <FaOpencart className="text-xl text-gray-800" />, badge: totalItems },
            { href: "/about", label: "About", icon: <FcAbout className="text-xl" /> },
            { href: "/menu", label: "Menu", icon: <MdRestaurantMenu className="text-xl text-red-500" /> }
          ].map((link, idx) => (
            <Link key={idx} href={link.href}>
              <li className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-amber-600 hover:scale-105 hover:shadow-lg relative">
                {link.icon} {link.label}
                {/* Cart badge */}
                {link.badge && link.badge > 0 && (
                  <div className="absolute -top-2 -right-3 w-6 h-6 bg-red-500 rounded-full flex justify-center items-center text-white text-sm font-bold animate-pulse shadow-lg">
                    {link.badge}
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile menu toggle button */}
        <button onClick={() => setOpen(!open)} className="md:hidden z-50 p-2 rounded-full bg-white/50 backdrop-blur-lg shadow-md hover:bg-white transition-all duration-300">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Right section: food icon + logo */}
        <div className="flex items-center gap-3 animate-float">
          <IoFastFoodOutline className="text-3xl text-amber-600 hover:scale-110 transition-transform duration-300" />
          <Image
            width={70}
            height={70}
            src="https://png.pngtree.com/recommend-works/png-clipart/20250209/ourmid/pngtree-mcdonalds-logo-png-image_15326104.png"
            alt="Logo"
            className="object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Mobile navigation menu */}
      {open && (
        <ul className="absolute top-[100px] left-0 w-full bg-white/80 backdrop-blur-2xl rounded-b-3xl shadow-2xl flex flex-col gap-6 p-6 md:hidden animate-slideDown">
          {[
            { href: "/", label: "Home", icon: <RiHomeSmile2Fill className="text-xl text-green-400" /> },
            { href: "/cart", label: "Cart", icon: <FaOpencart className="text-xl text-gray-800" />, badge: totalItems },
            { href: "/about", label: "About", icon: <FcAbout className="text-xl" /> },
            { href: "/menu", label: "Menu", icon: <MdRestaurantMenu className="text-xl text-red-500" /> }
          ].map((link, idx) => (
            <Link key={idx} href={link.href} onClick={handleMobileLinkClick}>
              <li className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-amber-500 hover:scale-105 relative">
                {link.icon} {link.label}
                {/* Cart badge */}
                {link.badge && link.badge > 0 && (
                  <div className="absolute -top-2 -right-3 w-6 h-6 bg-red-500 rounded-full flex justify-center items-center text-white text-sm font-bold animate-pulse shadow-lg">
                    {link.badge}
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>
      )}

      {/* Navbar animations */}
      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown { animation: slideDown 0.5s ease forwards; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { animation: float 3s infinite ease-in-out; }

        @keyframes floatText {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-floatText { animation: floatText 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
}
