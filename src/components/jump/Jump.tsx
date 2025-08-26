// Import arrow-up icon from react-icons
import { BiVerticalTop } from "react-icons/bi";

// This component makes a button to jump to the top of the page
export default function Jump() {
  return (
    // A small round box (50x50), fixed at bottom-right of screen,
    // with orange background and border
    <div className="w-[50px] h-[50px] flex justify-center items-center border-2 border-zinc-600 bg-orange-400 fixed bottom-5 right-5 z-1000 rounded-full">
      
      {/* Link that moves page to element with id="goToNav" */}
      <a href="#goToNav">
        {/* Arrow-up icon inside the button */}
        <BiVerticalTop className="text-4xl" />
      </a>
    </div>
  )
}
