import React from 'react';

const ArnavSaoHeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/heroPageBackgroundImage.png')`, // Adjust path to your image
        }}
      >
        <div className="absolute inset-0 bg-white opacity-0"></div> {/* Adjusted opacity for better contrast */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-black px-4 md:px-8 py-16">
        
        {/* Main Heading */}
        <h1 className="text-5xl pt-12 md:pt-24 md:text-7xl font-semibold mb-4 font-sans text-left md:text-center">
          LEGO for Web Developers:<br />
          Build Anything with Grabbit & Go
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 pt-8 text-left md:text-center">
          Grapplers Unite! Discover Powerful Web Components Created by Your Peers.
        </p>

        {/* Button */}
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 md:px-10 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 block md:inline-block md:ml-0 md:text-left"> {/* Adjusted padding and alignment for button */}
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ArnavSaoHeroSection;