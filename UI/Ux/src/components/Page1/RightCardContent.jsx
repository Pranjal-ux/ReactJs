import React from "react";
import { ArrowRight } from "lucide-react";
const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-3 flex flex-col justify-between">
      <h2 className="bg-white rounded-[100%] text-center text-2xl font-bold h-8 w-7">
        1
      </h2>
      <div className="mt-52">
        <p className="text-lg text-white leading-relaxed ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ratione,
          sit quas iure similique deleniti.
        </p>
      </div>
      <div className="flex justify-between">
        <button className="bg-blue-500 rounded-full px-6 py-2 font-medium ">
          Satisfied
        </button>
        <button className="bg-blue-500 rounded-full px-2 py-2 font-medium ">
          <ArrowRight size={25} className="-my-1.5" />
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
