"use client";
import { useState } from "react";
import { products } from "@/data/products";
import { TiThSmall } from "react-icons/ti";
import { PiPizzaBold } from "react-icons/pi";
import { PiHamburgerBold } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import Jump from "@/components/jump/Jump";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

export default function Page() {
  // State for selected category
  const [category, setCategory] = useState("all");
  // Function to add product to cart from store
  const addToCart = useCartStore((state) => state.addToCart);

  // Filter products by selected category
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="w-3/4 m-auto mt-12">

      {/* Category title */}
      <p className="text-2xl text-center">Select Category :</p>
      <br />

      {/* Jump button */}
      <Jump />

      {/* Category buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12 justify-items-center">
        {/* All category */}
        <button
          onClick={() => setCategory("all")}
          className={`px-6 py-4 rounded-2xl transition-colors w-[130px] flex justify-center items-center cursor-pointer
    ${category === "all" ? "bg-amber-500 text-white" : "bg-gray-200 hover:bg-amber-300"}`}
        >
          <TiThSmall className="text-2xl" />
          <p className="ml-2">All</p>
        </button>

        {/* Pizza category */}
        <button
          onClick={() => setCategory("pizza")}
          className={`px-6 py-4 rounded-2xl transition-colors w-[130px] flex justify-center items-center cursor-pointer
    ${category === "pizza" ? "bg-amber-500 text-white" : "bg-gray-200 hover:bg-amber-300"}`}
        >
          <PiPizzaBold className="text-2xl" />
          <p className="ml-2">Pizza</p>
        </button>

        {/* Burger category */}
        <button
          onClick={() => setCategory("burger")}
          className={`px-6 py-4 rounded-2xl transition-colors w-[130px] flex justify-center items-center cursor-pointer
    ${category === "burger" ? "bg-amber-500 text-white" : "bg-gray-200 hover:bg-amber-300"}`}
        >
          <PiHamburgerBold className="text-2xl" />
          <p className="ml-2">Burger</p>
        </button>

        {/* Coffee category */}
        <button
          onClick={() => setCategory("coffee")}
          className={`px-6 py-4 rounded-2xl transition-colors w-[130px] flex justify-center items-center cursor-pointer
    ${category === "coffee" ? "bg-amber-500 text-white" : "bg-gray-200 hover:bg-amber-300"}`}
        >
          <GiCoffeeCup className="text-2xl" />
          <p className="ml-2">Coffee</p>
        </button>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer relative h-[500px] flex flex-col bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden group"
          >
            {/* Product image */}
            <div className="relative w-full h-80 bg-gray-50 flex items-center justify-center overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Product info */}
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-2xl font-extrabold text-amber-600 mt-4">
                ${product.price}
              </p>

              {/* Add to cart button */}
              <button
                onClick={() => addToCart(product)}
                className="relative mt-6 w-full py-3 rounded-xl bg-amber-500 text-white font-semibold overflow-hidden transition-all duration-300 group-hover:bg-amber-600"
              >
                <span className="cursor-pointer relative z-10 flex items-center justify-center gap-2">
                  🛒 Add to Cart
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </div>

            {/* Discount badge */}
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              -20%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
