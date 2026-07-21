"use client";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function SimpleNav() {
  const totalItems = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Gold glow line */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          {/* Logo - Clean & Simple */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/20 group-hover:shadow-amber-400/40 transition-all duration-500">
              <span className="text-black font-bold text-xl tracking-tight">M</span>
            </div>
            <div>
              <h1 className="text-xl font-light tracking-[0.3em] text-white/90 group-hover:text-white transition-colors duration-300">
                <span className="font-medium text-amber-400">c</span>D
              </h1>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="group relative py-2 cursor-pointer">
                  <span className="text-white/40 group-hover:text-white text-sm tracking-[0.2em] uppercase transition-all duration-300">
                    {link.label}
                  </span>
                  <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-amber-400/60 group-hover:w-full transition-all duration-300"></span>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative group">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/5 transition-all duration-300">
                <div className="relative">
                  <ShoppingBag size={20} className="text-white/40 group-hover:text-amber-400 transition-all duration-300" />
                  {totalItems > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/20">
                      <span className="text-[9px] text-black font-bold">{totalItems}</span>
                    </div>
                  )}
                </div>
                <span className="hidden lg:block text-white/20 text-xs tracking-[0.2em] uppercase">
                  Cart
                </span>
              </div>
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-all duration-300"
            >
              {isOpen ? (
                <X size={22} className="text-white/60" />
              ) : (
                <Menu size={22} className="text-white/60" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-2xl">
          <div className="flex flex-col items-center justify-center h-full gap-10 p-8">
            <div className="w-12 h-[2px] bg-amber-400/20"></div>
            
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/about", label: "About" },
              { href: "/cart", label: "Cart", badge: totalItems },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4"
              >
                <span className="text-white/20 text-sm tracking-[0.5em] uppercase">
                  ●
                </span>
                <span className="text-white/60 group-hover:text-white text-3xl font-light tracking-[0.2em] transition-all duration-300">
                  {link.label}
                </span>
                {link.badge && link.badge > 0 && (
                  <span className="text-amber-400 text-sm bg-amber-400/10 px-3 py-1 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            
            <div className="w-12 h-[2px] bg-amber-400/20"></div>
          </div>
        </div>
      )}
    </>
  );
}