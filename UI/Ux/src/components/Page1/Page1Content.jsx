import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Navbar from "./Navbar";

const Page1Content = () => {
  return (
    <div className="px-8 py-10 flex gap-7 h-[90vh]">
      
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;
