import React from "react";

const PricingCard = ({ bg, text, img, price, button, title }) => {
  return (
    <div
      className={`p-10 space-y-5 rounded-md bg-${bg} shadow-2xl text-${text}`}
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      <h1 className="text-4xl font-bold">
        {price}$ <span className="font-thin">/month</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
        architecto? Perferendis tenetur ut temporibus laborum nemo consequatur
        hic sint esse.
      </p>
      <ul className="space-y-5">
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
      </ul>
      <button className={`px-5 py-2 ${button} font-semibold rounded-full`}>
        Choose plan
      </button>
    </div>
  );
};

export default PricingCard;
