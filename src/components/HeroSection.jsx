import React from "react";
import heroImage from "../assets/hero-image.jpg";
import makeupKit from "../assets/makeup-kit.jpg";
import bangles from "../assets/bangles.jpg";

const HeroSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="flex flex-col items-center justify-between gap-10 mx-auto max-w-7xl md:flex-row">
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
            <button className="px-8 py-3 font-semibold text-gray-900 transition duration-300 border-2 border-primary rounded-lg hover:bg-pink-50">
              View Collections
            </button>
          </div>
        </div>

        {/* Right Image Stack - Card Fan Effect */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-96">
            {/* Bottom Card - Bangles (rotated left) */}
            <div 
              className="absolute top-0 left-0 w-full h-full p-4 bg-pink-100 shadow-xl rounded-2xl"
              style={{ transform: 'rotate(-8deg)', transformOrigin: 'bottom center' }}
            >
              <img
                src={bangles}
                alt="Bangles"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            
            {/* Middle Card - Makeup Kit (slightly rotated) */}
            <div 
              className="absolute top-0 left-0 w-full h-full p-4 bg-pink-50 shadow-xl rounded-2xl"
              style={{ transform: 'rotate(-4deg)', transformOrigin: 'bottom center' }}
            >
              <img
                src={makeupKit}
                alt="Makeup Kit"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            
            {/* Top Card - Hero Image (no rotation, fully visible) */}
            <div 
              className="absolute top-0 left-0 w-full h-full p-4 bg-white shadow-xl rounded-2xl"
              style={{ transform: 'rotate(0deg)' }}
            >
              <img
                src={heroImage}
                alt="Beauty products"
                className="object-cover w-full h-full rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;