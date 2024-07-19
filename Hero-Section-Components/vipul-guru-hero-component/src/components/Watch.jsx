import React from "react";

const Watch = () => {
  return (
    <div className="py-20 px-5 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2 space-y-5">
        <p className="text-green-400">Lorem ipsum dolor sit.</p>
        <h1 className="text-5xl font-semibold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam
          assumenda alias eveniet voluptas dolore, odio perspiciatis autem
          expedita! Vel sapiente ab accusamus cupiditate amet.
        </p>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
          Watch
        </button>
      </div>
      <div className="md:w-1/3">
        <img src="/watch_img.svg" alt="" />
      </div>
    </div>
  );
};

export default Watch;
