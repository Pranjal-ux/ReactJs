import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 relative">
      <div className="p-4">
        <h3 className="text-[#1a1c1b] text-6xl font-bold px-3 mb-6 leading-[1.1]">
          Prospective
          <br />
          <span>Customer</span>
          <br />
          Segementation
        </h3>
        <p className="text-lg px-2 text-[#535e58] font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laborum
          repellat perferendis recusandae placeat neque corporis omnis, ipsum
          vitae culpa quos odio vero vel eos iure at, ea iusto natus.
        </p>
      </div>
      <div className="text-8xl absolute top-[88%] left-1 ">
        <ArrowUpRight size={80} />
      </div>
    </div>
  );
};

export default LeftContent;
