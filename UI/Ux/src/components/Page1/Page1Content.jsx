import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Navbar from "./Navbar";

const Page1Content = (props) => {
  return (
    <div className="px-8 py-10 flex gap-7 h-[90vh]">
      <LeftContent />
      <RightContent user={props.user} />
    </div>
  );
};

export default Page1Content;
