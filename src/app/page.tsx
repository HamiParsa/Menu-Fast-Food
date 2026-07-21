"use client";

import { GiPizzaSlice, GiCoffeeCup, GiFriedEggs, GiHotDog } from "react-icons/gi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, ChevronRight } from "lucide-react";

export default function Homepage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const foodIcons = [
    { icon: <GiPizzaSlice className="text-4xl text-amber-400/20" />, x: 5, y: 15 },
    { icon: <GiFriedEggs className="text-4xl text-amber-400/20" />, x: 90, y: 20 },
    { icon: <GiCoffeeCup className="text-3xl text-amber-400/20" />, x: 95, y: 75 },
    { icon: <GiHotDog className="text-3xl text-amber-400/15" />, x: 3, y: 80 },
  ];

  const features = [
    { number: "70+", label: "Years of Excellence" },
    { number: "500+", label: "Locations Worldwide" },
    { number: "4.9★", label: "Customer Rating" },
    { number: "10M+", label: "Happy Customers" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute -top-56 -right-56 w-[700px] h-[700px] bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-56 -left-56 w-[700px] h-[700px] bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/3 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200/50 rounded-full mb-6">
              <Sparkles size={14} className="text-amber-400" />
              <span className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium">Since 1955</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight">
              Premium
              <br />
              <span className="font-serif italic text-amber-500">Fast Food</span>
            </h1>
            
            <p className="text-gray-400 text-lg mt-6 max-w-lg leading-relaxed">
              Crafted with passion, served with love. Experience the taste that defined a generation of food lovers.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black font-medium rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-400/20"
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                Our Story
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-100">
              {features.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-light text-gray-900">{stat.number}</div>
                  <div className="text-gray-400 text-xs tracking-[0.1em] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Image with Floating Food Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-amber-400/10 to-transparent rounded-full blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-white rounded-full border border-amber-200/30 shadow-2xl shadow-amber-400/10 flex items-center justify-center">
                  
                  {/* Floating Pizza Icon inside circle */}
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 8, 0, -8, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-center"
                  >
                    <GiPizzaSlice className="text-[120px] sm:text-[150px] lg:text-[180px] text-amber-400/80" />
                    <div className="mt-4 flex items-center justify-center gap-1">
                      <Star size={16} className="fill-amber-400 text-amber-400" />
                      <Star size={16} className="fill-amber-400 text-amber-400" />
                      <Star size={16} className="fill-amber-400 text-amber-400" />
                      <Star size={16} className="fill-amber-400 text-amber-400" />
                      <Star size={16} className="fill-amber-400 text-amber-400" />
                    </div>
                  </motion.div>

                  {/* Decorative rings */}
                  <div className="absolute inset-4 rounded-full border border-amber-200/20 pointer-events-none"></div>
                  <div className="absolute inset-8 rounded-full border border-amber-200/10 pointer-events-none"></div>
                  <div className="absolute inset-12 rounded-full border border-amber-200/5 pointer-events-none"></div>
                </div>

                {/* Floating badge - Rating */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center gap-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                    <Star size={18} className="text-black fill-black" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">4.9/5</div>
                    <div className="text-[10px] text-gray-400 tracking-[0.1em] uppercase">Rating</div>
                  </div>
                </motion.div>

                {/* Floating badge - Fresh */}
                <motion.div 
                  className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex items-center gap-2"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                    <Sparkles size={14} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900">Fresh</div>
                    <div className="text-[8px] text-gray-400 tracking-[0.1em] uppercase">Ingredients</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Icons */}
        {mounted &&
          foodIcons.map((item, index) => (
            <div
              key={index}
              className="absolute hidden xl:block"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            >
              <div className="animate-float" style={{ animationDelay: `${index * 600}ms` }}>
                {item.icon}
              </div>
            </div>
          ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}