import React from "react";
import FadeInSection from "./FadeInSection";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gradient-to-b from-primaryBlue from-0% sm:from-10%  via-secondaryBlue to-main">
      <div className="md:w-2/5 w-full flex items-center justify-center p-8">
        <FadeInSection>
          <div className="text-center md:text-left space-y-4">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-black">
              What if...
            </h1>
            <p className="mb-8 max-w-xl text-black lg:text-xl">
              What if you had true free weekends? What if you could spend more
              time with your family? We deliver tailor-made AI solutions that
              handle repetitive tasks, helping you build a future-ready company
              while increasing profitability.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <button className="w-full px-5 py-2 text-sm font-medium tracking-wide text-black capitalize transition-transform duration-300 transform bg-primaryBlue rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Contact us
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Image Section */}
      <div className="md:w-3/5 w-full bg-cover bg-center">
        <img
          src="/family.jpg"
          className="w-full h-full max-h-[550px] object-cover"
          alt="Hero"
        />
      </div>
    </div>
  );
}
