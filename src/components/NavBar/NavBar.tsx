"use client"; // This makes the component run on client side in Next.js

// Importing things we need
import Image from "next/image"; // For optimized images in Next.js
import { RiHomeSmile2Fill } from "react-icons/ri"; // Home icon
import { FcAbout } from "react-icons/fc"; // About icon
import { MdRestaurantMenu } from "react-icons/md"; // Menu icon
import { FaOpencart } from "react-icons/fa6"; // Cart icon
import { useCartStore } from "@/store/cartStore"; // Store for cart items
import { IoFastFoodOutline } from "react-icons/io5"; // Food icon
import { Menu, X } from "lucide-react"; // Menu and close icons
import Link from "next/link"; // Next.js link (for navigation)
import { useState } from "react"; // React state hook

// NavBar component
export default function NavBar() {
  // Get total number of items from cart store
  const totalItems = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  // "open" is for showing or hiding the mobile menu
  const [open, setOpen] = useState(false);

  return (
    // Main container of NavBar
    <div
      id="goToNav"
      className="w-3/4 h-[100px] bg-white rounded-2xl shadow-md m-auto mt-[30px] flex justify-between items-center px-8 relative"
    >
      {/* Logo text (only visible on medium screen and bigger) */}
      <div className="text-2xl hidden md:block">mcdonalds</div>

      {/* Navigation links (desktop) */}
      <ul className="hidden md:flex text-lg gap-12 font-medium">
        {/* Home link */}
        <Link href="/">
          <li className="hover:text-amber-600 hover:border-b-2 border-amber-600 cursor-pointer flex items-center gap-2 transition-colors">
            <RiHomeSmile2Fill className="text-xl text-green-400" /> Home
          </li>
        </Link>

        {/* Cart link with number of items */}
        <Link href="/cart">
          <li className="hover:text-amber-600 hover:border-b-2 border-amber-600 cursor-pointer flex items-center gap-2 transition-colors">
            <FaOpencart className="text-xl text-shadow-gray-500 " /> Cart
            <div className="flex justify-center items-center w-[20px] h-[20px] rounded-full bg-amber-500">
              {totalItems}
            </div>
          </li>
        </Link>

        {/* About link */}
        <Link href='/about'>
          <li className="hover:text-amber-600 hover:border-b-2 border-amber-600 cursor-pointer flex items-center gap-2 transition-colors">
            <FcAbout className="text-xl" /> About
          </li>
        </Link>

        {/* Menu link */}
        <Link href="/menu">
          <li className="hover:text-amber-600 hover:border-b-2 border-amber-600 cursor-pointer flex items-center gap-2 transition-colors">
            <MdRestaurantMenu className="text-xl text-red-500" /> Menu
          </li>
        </Link>
      </ul>

      {/* Button for opening/closing mobile menu */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu (only shows when "open" is true) */}
      {open && (
        <ul className=" z-1000 mt-1 absolute top-[100px] left-0 w-full bg-white shadow-lg flex flex-col gap-6 p-6 md:hidden text-lg font-medium rounded-b-2xl">
          <Link href="/">
            <li className=" flex items-center gap-2 transition-colors">
              <RiHomeSmile2Fill className="text-xl text-green-400" /> Home
            </li>
          </Link>
          <Link href="/cart">
            <li className="flex items-center gap-2 transition-colors">
              <FaOpencart className="text-xl text-shadow-gray-500 " /> Cart
              <div className="flex justify-center items-center w-[20px] h-[20px] rounded-full bg-amber-500">
                {totalItems}
              </div>
            </li>
          </Link>
          <Link href='/about'>
            <li className=" flex items-center gap-2 transition-colors">
              <FcAbout className="text-xl" /> About
            </li>
          </Link>
          <Link href="/menu">
            <li className=" flex items-center gap-2 transition-colors">
              <MdRestaurantMenu className="text-xl text-red-500" /> Menu
            </li>
          </Link>
        </ul>
      )}

      {/* Right side: food icon + McDonald's image */}
      <div className="flex items-center gap-3">
        <IoFastFoodOutline className="text-3xl text-amber-600" />
        <Image
          width={70}
          height={70}
          src="https://png.pngtree.com/recommend-works/png-clipart/20250209/ourmid/pngtree-mcdonalds-logo-png-image_15326104.png"
          alt="Not Found"
          className="object-contain"
        />
      </div>
    </div>
  );
}
