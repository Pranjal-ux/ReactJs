import React from "react";
import Page1Content from "./Page1Content";
import Navbar from "./Navbar";

const Page1 = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Content />
    </div>
  );
};

export default Page1;
