"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Star, 
  Users, 
  Coffee, 
  Award, 
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { GiPizzaSlice } from "react-icons/gi";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 overflow-x-hidden">
      
      {/* Background Decorations - Fixed positioning to prevent horizontal scroll */}
      <div className="fixed -top-56 -right-56 w-[700px] h-[700px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-56 -left-56 w-[700px] h-[700px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 border border-amber-200/50 rounded-full mb-6">
            <Sparkles size={14} className="text-amber-400" />
            <span className="text-amber-600 text-xs tracking-[0.3em] uppercase font-medium">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900">
            Our <span className="font-serif italic text-amber-500">Story</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Premium fast food crafted with passion since 1955. Every bite tells a story of quality and tradition.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          
          {/* Left - Floating Food Icon */}
          <motion.div
            className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-amber-400/5 to-transparent rounded-full blur-2xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-white rounded-full border border-amber-200/30 shadow-2xl shadow-amber-400/10 flex items-center justify-center">
                
                {/* Floating Pizza Icon */}
                <motion.div
                  animate={{ 
                    y: [0, -25, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-center"
                >
                  <GiPizzaSlice className="text-[140px] sm:text-[180px] lg:text-[200px] text-amber-400/80" />
                  <div className="mt-6 flex items-center justify-center gap-1">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </div>
                </motion.div>

                {/* Decorative rings */}
                <div className="absolute inset-4 rounded-full border border-amber-200/20 pointer-events-none"></div>
                <div className="absolute inset-8 rounded-full border border-amber-200/10 pointer-events-none"></div>
              </div>

              {/* Floating badge */}
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
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full">
              <span className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium">Our Mission</span>
            </div>
            <h2 className="text-4xl font-light text-gray-900">
              Serving <span className="text-amber-500 font-serif italic">Quality</span> Since 1955
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              To serve premium quality fast food that brings people together. Every ingredient is carefully selected, every recipe perfected over decades.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe in creating moments of joy through food, whether youre grabbing a quick lunch or celebrating with friends.
            </p>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 border-2 border-white flex items-center justify-center text-xs text-amber-800 font-medium">
                    {i === 4 ? '10+' : ''}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">10,000+</div>
                <div className="text-xs text-gray-400 tracking-[0.1em] uppercase">Happy Customers</div>
              </div>
            </div>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black font-medium rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-400/20 mt-4"
            >
              Explore Menu
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: "70+", label: "Years", icon: <Award size={22} className="text-amber-400" /> },
            { number: "500+", label: "Recipes", icon: <Coffee size={22} className="text-amber-400" /> },
            { number: "10K+", label: "Customers", icon: <Users size={22} className="text-amber-400" /> },
            { number: "4.9★", label: "Rating", icon: <Star size={22} className="text-amber-400" /> },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-amber-200/50 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -6 }}
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-light text-gray-900">{stat.number}</div>
              <div className="text-gray-400 text-xs tracking-[0.15em] uppercase mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900">
              Our <span className="text-amber-500 font-serif italic">Journey</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Decades of excellence</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200"></div>
            <div className="space-y-12">
              {[
                { year: "1955", text: "Founded with a single location and a vision for quality fast food." },
                { year: "1970", text: "Expanded to 50 locations across the country, becoming a household name." },
                { year: "1990", text: "Introduced signature recipes that defined a generation of fast food." },
                { year: "2025", text: "Serving premium quality to millions worldwide with 500+ locations." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-amber-200/50 hover:shadow-lg transition-all duration-300">
                      <span className="text-amber-400 font-serif italic text-2xl">{item.year}</span>
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-5 h-5 bg-amber-400 rounded-full border-4 border-white shadow-xl shadow-amber-400/20"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}