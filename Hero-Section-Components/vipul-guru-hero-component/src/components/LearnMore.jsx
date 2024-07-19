import React from "react";

const LearnMore = () => {
  return (
    <div className="py-20 px-5 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/3">
        <img src="/learn_img.svg" alt="" />
      </div>
      <div className="md:w-1/2 space-y-5">
        <p className="text-green-400">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-6xl font-semibold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          molestias modi dolor adipisci, accusantium cum.
        </p>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          molestias modi dolor adipisci, accusantium cum.
        </p>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
