import React from "react";
import RightCard from "./RightCard";

const RightContent = () => {
  return (
    <div className="h-full overflow-x-auto rounded-2xl p-4 flex flex-nowrap gap-5 w-2/3 bg-blue-950">
      <RightCard />
      <RightCard />
      <RightCard />

     
    </div>
  );
};

export default RightContent;
