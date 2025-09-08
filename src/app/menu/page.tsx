"use client";

import { useState, useEffect } from "react";
import { products, Product, CategoryType } from "@/data/products";
import { TiThSmall } from "react-icons/ti";
import { PiPizzaBold, PiHamburgerBold } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import Jump from "@/components/jump/Jump";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

type Category = "all" | CategoryType;

export default function MegaFancyMenu() {
  const [category, setCategory] = useState<Category>("all");
  const [mounted, setMounted] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  // Ensure animations and transitions work after component mounts
  useEffect(() => setMounted(true), []);

  // Filter products by category
  const filteredProducts: Product[] =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  // Available category buttons
  const categories = [
    { key: "all", label: "All", icon: <TiThSmall className="text-2xl" /> },
    { key: "pizza", label: "Pizza", icon: <PiPizzaBold className="text-2xl" /> },
    { key: "burger", label: "Burger", icon: <PiHamburgerBold className="text-2xl" /> },
    { key: "coffee", label: "Coffee", icon: <GiCoffeeCup className="text-2xl" /> },
  ];

  return (
    <div className="relative max-w-6xl mx-auto mt-[200px] px-4">
      {/* Background gradient animation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 via-amber-400 to-purple-600 animate-gradient-x opacity-20"></div>

      {/* Page title */}
      <h1 id="goToNav" className="text-3xl md:text-4xl font-extrabold text-center text-black mb-6 animate-fadeIn">
        🌟 Ultra Mega Fancy Menu
      </h1>

      {/* Jumping animation component */}
      <Jump />

      {/* Category filter buttons */}
      <div className="flex justify-center gap-4 flex-wrap my-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key as Category)}
            className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
              ${category === cat.key
                ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-2xl scale-110 animate-bounceSubtle"
                : "bg-gray-200 hover:bg-gradient-to-r hover:from-amber-300 hover:to-amber-500 hover:scale-105"
              }`}
          >
            {cat.icon}
            {cat.label}
            {category === cat.key && (
              <span className="absolute -bottom-2 left-1/2 w-12 h-1 bg-amber-500 rounded-full animate-pulse -translate-x-1/2"></span>
            )}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 mt-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`relative bg-white/10 backdrop-blur-3xl rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 group
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              hover:-translate-y-6 hover:shadow-4xl hover:scale-105`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            {/* Product image with hover effect */}
            <div className="relative h-64 w-full flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
              <div className="transition-transform duration-700 group-hover:scale-110" style={{ transformStyle: "preserve-3d" }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1000}
                  height={1000}
                  unoptimized
                  className="object-contain h-full w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Product details */}
            <div className="p-6 text-center flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-amber-400 to-purple-500 transition-transform duration-300 group-hover:scale-105 animate-glowText">
                {product.title}
              </h3>
              <p className="text-2xl md:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-red-400 to-pink-500 group-hover:scale-105 animate-glowText">
                ${product.price}
              </p>

              {/* Add to cart button */}
              <button
                onClick={() => addToCart(product)}
                className="relative flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 via-amber-400 to-purple-600 text-white font-bold overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                🛒 Add to Cart
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes glowText {
          0%, 100% { text-shadow: 0 0 10px #fff; }
          50% { text-shadow: 0 0 20px #ff0; }
        }
        .animate-glowText { animation: glowText 1.5s infinite alternate; }

        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounceSubtle { animation: bounceSubtle 1s infinite; }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x { 
          animation: gradient-x 10s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-pulse { animation: pulse 1.2s infinite; }
      `}</style>
    </div>
  );
}
