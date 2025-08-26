import FoodIcon from "@/components/FoodIcon/FoodIcon";
import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <div>
      {/* Slider component shows images */}
      <Slider />

      {/* FoodIcon component shows food icons */}
      <FoodIcon />
    </div>
  );
}
