import Image from "next/image";
import Teamcard from "@/components/Teamcard";
import Stars from "@/components/ui/stars";

export default function Teams() {
  return (
    <div className="bg-black dark:bg-black text-gray-700 min-h-screen flex flex-col items-center justify-center relative">
      {/* Stars visible only in dark mode */}
      <Stars  />
      
      {/* Content container to ensure the cards are centered */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-7xl">
        {/* Heading text */}
        

        {/* Grid layout for team cards */}
        <div className="flex flex-row sm:grid-cols-2 gap-2 w-full">
          <Teamcard />
          
        </div>
      </div>
    </div>
  );
}
