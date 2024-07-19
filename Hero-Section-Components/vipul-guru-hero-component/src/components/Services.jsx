import React from "react";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-20 px-5 space-y-10 md:space-y-0">
      <ServicesCard src="webs_dev.svg" title="website design" />
      <ServicesCard src="dev.svg" title="Development" />
      <ServicesCard src="mobile_dev.svg" title="App Design" />
    </div>
  );
};

export default Services;
