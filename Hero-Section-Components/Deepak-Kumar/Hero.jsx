import React from "react";
import hero1 from "../assets/hero1.jpeg";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className=" bg-black p-8">
        <div>
          <h1 className="julius text-white text-center text-4xl">
            IQLIPSE'S MARKETPLACE
          </h1>
          <p className="quicksand text-[#71717a] text-center text-lg">
            Every thing you need, right here!
          </p>
        </div>
        <div className="flex items-center justify-center gap-8 mt-8">
          <button className="text-white bg-[#52525b] hover:bg-[#3f3f46] p-3 pl-8 pr-8 rounded">
            EXPLORE
          </button>
          <button className="text-white bg-[#52525b] hover:bg-[#3f3f46] p-3 pl-8 pr-8 rounded">
            CART
          </button>
        </div>
        <div className="grid grid-col-2 grid-flow-col place-items-center	mt-8">
          <img src={hero1} alt="hero1" className="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
