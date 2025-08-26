"use client";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { TbShoppingCartOff } from "react-icons/tb";
import { FaCheckCircle, FaLeaf, FaTruck, FaSmile } from "react-icons/fa";

export default function Cart() {
  // Get cart state and actions from store
  const { cart, increase, decrease, clearCart, totalPrice } = useCartStore();
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Function when user clicks "Place Order"
  const handlePlaceOrder = () => {
    if (cart.length === 0) return; // do nothing if cart is empty
    clearCart(); // clear the cart
    setOrderSuccess(true); // show success message
    setTimeout(() => setOrderSuccess(false), 3500); // hide message after 3.5s
  };

  return (
    // Main page container
    <div className="mt-3 relative bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen py-10 px-4">
      {/* Order success message */}
      {orderSuccess && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-3 rounded-3xl shadow-2xl flex items-center gap-3 animate-slideFade">
          <FaCheckCircle size={24} /> Your order has been placed successfully!
        </div>
      )}

      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Page title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          🛒 Your Shopping Cart
        </h2>

        {/* Show empty cart message */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-8 mt-10">
            <TbShoppingCartOff className="text-[200px] text-gray-300 animate-bounce" />
            <p className="text-gray-600 text-center text-lg max-w-xl">
              Your cart is empty. Explore our delicious fast food items...
            </p>
          </div>
        ) : (
          <>
            {/* Cart items grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-3xl shadow-2xl p-4 flex flex-col items-center gap-4 hover:scale-105 hover:shadow-3xl transition-transform duration-500"
                >
                  {/* Product image */}
                  <div className="w-full h-40 relative rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product title & price */}
                  <div className="text-center">
                    <p className="text-lg font-bold">{item.title}</p>
                    <p className="text-orange-600 font-semibold">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition shadow-md"
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </button>
                    <span className="font-bold text-lg">{item.quantity}</span>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition shadow-md"
                      onClick={() => increase(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total price & action buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6 bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Total: ${totalPrice()}
              </h3>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={clearCart}
                  className="bg-gray-800 text-white px-8 py-3 rounded-3xl hover:bg-black transition shadow-lg"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-blue-600 text-white px-8 py-3 rounded-3xl hover:bg-blue-700 transition shadow-lg animate-bounceHover"
                >
                  Place Order
                </button>
              </div>
            </div>

            {/* About section */}
            <div className="relative bg-gradient-to-r from-orange-100 to-yellow-50 rounded-3xl shadow-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/fast-food-bg.jpg')] bg-cover bg-center opacity-20"></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4 z-10 relative">
                About Our Store
              </h3>
              <p className="text-gray-700 text-lg z-10 relative leading-relaxed mb-2">
                Welcome to our premium fast food store! ...
              </p>
              <p className="text-gray-700 text-lg z-10 relative leading-relaxed">
                Manage your cart effortlessly, adjust quantities, and place your
                order...
              </p>
            </div>

            {/* Features section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                <FaLeaf className="text-green-500 text-4xl" />
                <p className="font-semibold text-center">Fresh Ingredients</p>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                <FaTruck className="text-blue-500 text-4xl" />
                <p className="font-semibold text-center">Fast Delivery</p>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                <FaSmile className="text-yellow-500 text-4xl" />
                <p className="font-semibold text-center">Customer Happiness</p>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                <FaCheckCircle className="text-green-600 text-4xl" />
                <p className="font-semibold text-center">Quality Guaranteed</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes slideFade {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideFade {
          animation: slideFade 0.6s ease forwards;
        }
        .animate-bounceHover:hover {
          animation: bounce 0.5s;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}
