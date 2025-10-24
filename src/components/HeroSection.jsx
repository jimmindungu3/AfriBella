import React from "react";
import heroImage from "../assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative px-6 py-20">
      {/* Background Image for Small Screens */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroImage}
          alt="Beauty products background"
          className="object-cover w-full h-full opacity-20"
        />
      </div>

      <div className="relative flex flex-col items-center justify-between gap-10 mx-auto max-w-7xl md:flex-row">
        {/* Left Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 italic tracking-wide">
            Elevate Your{" "}
            <span className="text-pink-600">&nbsp;Style & Beauty</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-700">
            Exquisite jewelry, makeup essentials, and accessories to complete
            your look. Handpicked pieces for the modern woman.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <button className="px-8 py-3 font-semibold text-white transition duration-300 bg-pink-600 rounded-lg shadow-md hover:bg-pink-700">
              Shop Now
            </button>
            <button className="px-8 py-3 font-semibold text-gray-900 transition duration-300 border-2 border-pink-600 rounded-lg hover:bg-pink-50">
              View Collections
            </button>
          </div>
        </div>

        {/* Right Image - Only visible on medium+ screens */}
        <div className="hidden md:block md:w-1/2">
          <div className="w-full h-96">
            <img
              src={heroImage}
              alt="Beauty products"
              className="object-cover w-full h-full rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;