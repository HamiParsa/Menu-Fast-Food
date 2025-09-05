"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { TbShoppingCartOff } from "react-icons/tb";
import { FaCheckCircle, FaLeaf, FaTruck, FaSmile } from "react-icons/fa";

export default function Cart() {
  const { cart, increase, decrease, clearCart, totalPrice } = useCartStore();
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    clearCart();
    setOrderSuccess(true);
    setTimeout(() => setOrderSuccess(false), 3500);
  };

  return (
    <div className="relative mt-[100px]  min-h-screen py-10 px-4 overflow-hidden">
      {/* Order success notification */}
      {orderSuccess && (
        <div className="fixed mt-[200px] top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-3 rounded-3xl shadow-2xl flex items-center gap-3 animate-slideFade z-50">
          <FaCheckCircle size={24} /> Your order has been placed successfully!
        </div>
      )}

      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6 animate-fadeInUp">
          🛒 Your Shopping Cart
        </h2>

        {cart.length === 0 ? (
          // Empty cart view
          <div className="flex flex-col items-center gap-8 mt-10">
            <TbShoppingCartOff className="text-[200px] text-gray-300 animate-bounceSlow" />
            <p className="text-gray-600 text-center text-lg max-w-xl">
              Your cart is empty. Explore our delicious fast food items...
            </p>
          </div>
        ) : (
          <>
            {/* Cart items grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative bg-gradient-to-br from-white/90 to-orange-50 backdrop-blur-md rounded-3xl shadow-2xl p-4 flex flex-col items-center gap-4 hover:scale-105 hover:shadow-3xl transition-transform duration-500 animate-slideIn`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Product image */}
                  <div className="w-full h-44 relative rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110 hover:rotate-1"
                    />
                  </div>

                  {/* Product title and price */}
                  <div className="text-center">
                    <p className="text-lg md:text-xl font-bold text-gray-800">{item.title}</p>
                    <p className="text-orange-600 font-extrabold text-lg md:text-2xl">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrease(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 shadow-md transition transform hover:scale-110"
                    >
                      -
                    </button>
                    <span className="font-bold text-lg md:text-xl">{item.quantity}</span>
                    <button
                      onClick={() => increase(item.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 shadow-md transition transform hover:scale-110"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total price and action buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6 bg-white/90 rounded-3xl shadow-2xl p-6 backdrop-blur-md">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                Total: ${totalPrice()}
              </h3>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={clearCart}
                  className="bg-gray-800 text-white px-8 py-3 rounded-3xl hover:bg-black transition shadow-lg hover:scale-105"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-blue-600 text-white px-8 py-3 rounded-3xl hover:bg-blue-700 transition shadow-lg animate-bounceHover hover:scale-110"
                >
                  Place Order
                </button>
              </div>
            </div>

            {/* About store section */}
            <div className="relative bg-gradient-to-r from-orange-100 to-yellow-50 rounded-3xl shadow-2xl p-8 overflow-hidden hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-[url('/fast-food-bg.jpg')] bg-cover bg-center opacity-20"></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4 z-10 relative">
                About Our Store
              </h3>
              <p className="text-gray-700 text-lg z-10 relative leading-relaxed mb-2">
                Welcome to our premium fast food store! Explore mouthwatering items.
              </p>
              <p className="text-gray-700 text-lg z-10 relative leading-relaxed">
                Manage your cart effortlessly, adjust quantities, and place your order quickly.
              </p>
            </div>

            {/* Features section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform hover:shadow-2xl">
                <FaLeaf className="text-green-500 text-4xl md:text-5xl" />
                <p className="font-semibold text-center text-lg md:text-xl">Fresh Ingredients</p>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform hover:shadow-2xl">
                <FaTruck className="text-blue-500 text-4xl md:text-5xl" />
                <p className="font-semibold text-center text-lg md:text-xl">Fast Delivery</p>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform hover:shadow-2xl">
                <FaSmile className="text-yellow-500 text-4xl md:text-5xl" />
                <p className="font-semibold text-center text-lg md:text-xl">Customer Happiness</p>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform hover:shadow-2xl">
                <FaCheckCircle className="text-green-600 text-4xl md:text-5xl" />
                <p className="font-semibold text-center text-lg md:text-xl">Quality Guaranteed</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideFade {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideFade { animation: slideFade 0.6s ease forwards; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounceHover:hover { animation: bounce 0.5s; }
        
        @keyframes bounceSlow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounceSlow { animation: bounceSlow 2s infinite; }

        @keyframes slideIn {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideIn { animation: slideIn 0.6s ease forwards; }

        @keyframes fadeInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.7s ease forwards; }
      `}</style>
    </div>
  );
}
