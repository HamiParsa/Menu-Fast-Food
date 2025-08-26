// Import some food icons from react-icons library
import { IoFastFoodOutline } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { SiCocacola } from "react-icons/si";
import { LiaHotdogSolid } from "react-icons/lia";

// This component shows some big food icons
export default function FoodIcon() {
  return (
    // A div that puts icons in a row (flex), makes them very big (text-9xl),
    // puts space between them (gap), and adds margin-top
    <div className="flex text-9xl justify-center gap-[50px] mt-10">
      {/* Fast food icon */}
      <IoFastFoodOutline />

      {/* Pizza icon */}
      <GiFullPizza />

      {/* CocaCola icon with red color */}
      <SiCocacola className="text-red-500" />

      {/* Hotdog icon */}
      <LiaHotdogSolid />
    </div>
  );
}
