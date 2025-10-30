import React from "react";
import Page1Content from "./Page1Content";
import Navbar from "./Navbar";

const Page1 = (props) => {
 
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Content user = {props.user} />
    </div>
  );
};

export default Page1;
