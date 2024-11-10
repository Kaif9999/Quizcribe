import { SplineBackgroundComponent } from "@/components/spline-background";
import { Footer } from "@/components/Footer";
import Stars from "@/components/ui/stars";

export default function Home() {
  return (
    <div>
      
      <SplineBackgroundComponent />
      <Stars />
      <div className="m-auto lg:mt-32 mt-10 sm:w-4/6 flex justify-center flex-col text-[#656C73] dark:text-white">
        <p className=" pl-5 text-xl font-semibold text-black dark:text-gray-500">
          We
        </p>
        <p className="lg:text-7xl md:text-5xl text-4xl text-center text-black dark:text-gray-500">
          <strong className="text-white bg-black dark:bg-opacity-0 md:rounded-2xl rounded-xl px-3 dark:px-0 mx-2">
            Think
          </strong>
          ,
          <strong className="text-white dark:bg-opacity-0 dark:px-1 bg-black rounded-xl px-3">
            Build
          </strong>{" "}
          &{" "}
          <strong className="text-white dark:bg-opacity-0 dark:px-0 bg-black rounded-xl px-3 mx-1">
            Code
          </strong>
        </p>
        <p className="text-center m-3 dark:text-gray-500 text-black text-2xl font-base">
          while having fun.
        </p>
      </div>
      <Footer />
    </div>
  );
}
