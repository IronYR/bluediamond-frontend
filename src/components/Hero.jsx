import React from "react";
import FadeInSection from "./FadeInSection";

export default function Hero() {
  return (
    <div style={{ paddingRight: "30px", paddingLeft: "30px" }}>
      <section className="py-32">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                What if...
              </h1>
              <p className="mb-8 max-w-xl text-gray-400 lg:text-xl">
                What if you had true free weekends? What if you could
                spend more time with your family? We deliver tailor-made AI
                solutions that handle repetitive tasks, helping you build a
                future-ready company while increasing profitability.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {/* Contact Us Button with zoom effect */}
                <button className="w-full px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-transform duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Contact us
                </button>
              </div>
            </div>

            {/* Hero Image with hover effect */}
            <img
              src="/static/hero-image.jpg"
              className="rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
              alt="Hero"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
