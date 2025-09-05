"use client";

import { BiVerticalTop } from "react-icons/bi";

export default function Jump() {
  return (
    // Floating "Back to Top" button
    <a
      href="#goToNav"
      className="fixed bottom-5 right-5 z-[1000] w-[60px] h-[60px] flex items-center justify-center 
                 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500
                 shadow-2xl hover:scale-110 hover:rotate-12 hover:shadow-pink-500/60
                 transition-all duration-300 animate-bounceSubtle cursor-pointer"
    >
      <BiVerticalTop className="text-4xl text-white drop-shadow-md" />
    </a>
  );
}
