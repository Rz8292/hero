import React from "react";

const Hero = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row justify-between items-center px-5">
      <div className="md:w-1/2 space-y-5">
        <p className="text-lg">Lorem ipsum dolor sit, amet consectetur.</p>
        <h1 className="text-7xl font-semibold">
          A <span className="text-green-500 font-bold">Digital</span> product
          design agency
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          ullam iste praesentium dolorum laudantium corrupti?
        </p>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
          Get Started
        </button>
      </div>
      <div>
        <img src="/hero_img.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
