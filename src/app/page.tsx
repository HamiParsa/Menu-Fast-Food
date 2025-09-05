"use client";

import Slider from "@/components/slider/Slider";
import { GiPizzaSlice, GiCoffeeCup, GiHamburger } from "react-icons/gi";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UltraMegaHomepage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Floating food icons with positions
  const foodIcons = [
    { icon: <GiPizzaSlice className="text-5xl text-yellow-400" />, x: 10, y: 20 },
    { icon: <GiHamburger className="text-5xl text-red-400" />, x: 80, y: 50 },
    { icon: <GiCoffeeCup className="text-4xl text-amber-500" />, x: 50, y: 80 },
  ];

  return (
    <div className="relative w-full mt-[100px] min-h-screen bg-gradient-to-br overflow-hidden">
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 via-amber-400 to-purple-600 animate-gradient-x opacity-30"></div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-pink-500 animate-floatText mb-4">
          🌟 Ultra Mega Fancy Foods
        </h1>
        <p className="text-lg md:text-2xl  mb-8 animate-fadeInUp">
          Explore our amazing menu and add your favorites to your cart
        </p>
        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-pink-500 text-white font-bold shadow-2xl hover:scale-110 hover:shadow-pink-500/50 transition-all duration-300 animate-glowButton">
          <Link href='/menu'>
            Explore Menu
          </Link>
        </button>
      </div>

      {/* Floating Food Icons */}
      {mounted &&
        foodIcons.map((item, index) => (
          <div
            key={index}
            className="absolute animate-float hover:animate-floatHover"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${index * 300}ms`,
            }}
          >
            {item.icon}
          </div>
        ))}

      {/* Slider Section */}
      <div className="mt-[-130px] z-10 relative px-4">
        <Slider />
      </div>
    </div>
  );
}
