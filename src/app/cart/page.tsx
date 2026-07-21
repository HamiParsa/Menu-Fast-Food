"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Truck,
  Coffee,
  X
} from "lucide-react";

export default function Cart() {
  const { cart, increase, decrease, clearCart, totalPrice } = useCartStore();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [removingId, setRemovingId] = useState<number | null>(null);

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    clearCart();
    setOrderSuccess(true);
    setTimeout(() => setOrderSuccess(false), 3500);
  };

  const features = [
    { icon: <Coffee size={18} />, label: "Fresh Ingredients", color: "from-green-400/20 to-green-400/5" },
    { icon: <Truck size={18} />, label: "Fast Delivery", color: "from-blue-400/20 to-blue-400/5" },
    { icon: <Shield size={18} />, label: "Quality Guaranteed", color: "from-amber-400/20 to-amber-400/5" },
    { icon: <Clock size={18} />, label: "24/7 Support", color: "from-purple-400/20 to-purple-400/5" },
  ];

  const handleRemove = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      // Find the item and decrease to 0
      const item = cart.find(i => i.id === id);
      if (item) {
        for (let i = 0; i < item.quantity; i++) {
          decrease(id);
        }
      }
      setRemovingId(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 pt-32 pb-20 px-4">
      
      {/* Success notification */}
      <AnimatePresence>
        {orderSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50"
          >
            <CheckCircle size={22} />
            <span className="text-sm font-medium tracking-wide">Order placed successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-[2px] bg-gradient-to-r from-amber-400 to-amber-500"></div>
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-medium">Your Cart</span>
              <div className="w-10 h-[2px] bg-gradient-to-l from-amber-400 to-amber-500"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900">
              Shopping <span className="font-serif italic text-amber-500">Bag</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          {cart.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearCart}
              className="text-gray-400 hover:text-red-500 text-sm transition-colors flex items-center gap-2 px-4 py-2 rounded-full hover:bg-red-50"
            >
              <Trash2 size={16} />
              Clear All
            </motion.button>
          )}
        </motion.div>

        {cart.length === 0 ? (
          // Empty Cart - Premium
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-full flex items-center justify-center mb-8">
                <ShoppingBag size={48} className="text-amber-300" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-400 text-sm mb-8">Looks like you havent added any items yet</p>
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-full hover:shadow-xl hover:shadow-amber-400/30 transition-all duration-300 hover:scale-105"
            >
              <span>Start Shopping</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-3 mb-8">
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.05 }}
                    className={`group flex items-center gap-5 p-4 bg-white rounded-2xl border border-gray-100 hover:border-amber-200/50 hover:shadow-lg transition-all duration-300 ${
                      removingId === item.id ? 'opacity-50' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-900 font-medium">{item.title}</h4>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-amber-500 font-light text-sm">${item.price}</span>
                        <span className="text-gray-300 text-xs">×</span>
                        <span className="text-gray-400 text-sm">{item.quantity}</span>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1">
                      <button
                        onClick={() => decrease(item.id)}
                        className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center transition-colors text-gray-400 hover:text-gray-700"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-gray-900 font-medium text-sm">{item.quantity}</span>
                      <button
                        onClick={() => increase(item.id)}
                        className="w-8 h-8 rounded-full bg-amber-400 text-white hover:bg-amber-500 transition-colors flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Total & Remove */}
                    <div className="flex items-center gap-4">
                      <div className="text-right min-w-[70px]">
                        <span className="text-gray-900 font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="w-8 h-8 rounded-full hover:bg-red-50 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 border border-gray-100 mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="text-sm text-gray-400 tracking-wide">Total Amount</div>
                  <div className="text-4xl font-light text-gray-900">
                    ${totalPrice()}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-gray-400">Tax included</span>
                    <span className="w-px h-3 bg-gray-200"></span>
                    <span className="text-xs text-green-500">Free delivery</span>
                  </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <Link
                    href="/menu"
                    className="px-6 py-3.5 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-all duration-300 text-sm"
                  >
                    Continue
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handlePlaceOrder}
                    className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-full hover:shadow-xl hover:shadow-amber-400/30 transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    Place Order
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Features - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className={`flex items-center gap-3 p-4 bg-gradient-to-br ${feature.color} rounded-xl border border-gray-100/50 hover:border-amber-200/30 transition-all duration-300`}
                >
                  <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-amber-400 shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 text-xs tracking-[0.05em] font-medium">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}