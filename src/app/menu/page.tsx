"use client";

import { useState, useEffect } from "react";
import { products, Product, CategoryType } from "@/data/products";
import { PiPizzaBold, PiHamburgerBold } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";

type Category = "all" | CategoryType;

export default function PremiumMenu() {
  const [category, setCategory] = useState<Category>("all");
  const [mounted, setMounted] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => setMounted(true), []);

  const filteredProducts: Product[] =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const categories = [
    { key: "all", label: "All" },
    { key: "pizza", label: "Pizza", icon: <PiPizzaBold size={16} /> },
    { key: "burger", label: "Burger", icon: <PiHamburgerBold size={16} /> },
    { key: "coffee", label: "Coffee", icon: <GiCoffeeCup size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Clean & Premium */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-amber-400"></div>
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-medium">Premium Selection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
              Our <span className="font-serif italic text-amber-500">Menu</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <span>{filteredProducts.length} items</span>
            <div className="w-px h-4 bg-gray-200"></div>
            <button className="flex items-center gap-2 hover:text-amber-500 transition-colors">
              View All
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Categories - Minimal Tabs */}
        <div className="flex gap-1 border-b border-gray-100 mb-12 overflow-x-auto pb-0">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key as Category)}
              className={`
                px-6 py-3 transition-all duration-300 whitespace-nowrap
                flex items-center gap-2 text-sm tracking-[0.15em] uppercase font-medium
                ${category === cat.key
                  ? "text-amber-500 border-b-2 border-amber-400"
                  : "text-gray-400 hover:text-gray-600"
                }
              `}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid - Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`
                group bg-white rounded-2xl overflow-hidden
                border border-gray-100
                hover:shadow-xl hover:border-amber-200/50
                transition-all duration-500 hover:-translate-y-2
                ${mounted ? "opacity-100" : "opacity-0"}
              `}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  unoptimized
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quick Add Button - Appears on hover */}
                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-amber-400 text-white shadow-lg shadow-amber-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-amber-500"
                >
                  <ShoppingBag size={18} />
                </button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-500 text-[10px] tracking-[0.2em] uppercase font-medium shadow-sm">
                  {product.category}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="text-gray-700 text-xs font-medium">4.8</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 font-medium text-base truncate">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-xs tracking-[0.1em] uppercase mt-1">
                      {product.category}
                    </p>
                  </div>
                  <span className="text-amber-500 font-semibold text-lg whitespace-nowrap">
                    ${product.price}
                  </span>
                </div>

                {/* Add to Cart - Mobile friendly */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full py-2.5 rounded-full bg-gray-50 hover:bg-amber-400 hover:text-white text-gray-600 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Add to Cart</span>
                  <ShoppingBag size={14} className="group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm tracking-[0.3em] uppercase">
              No items in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}