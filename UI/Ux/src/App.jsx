import React from "react";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";
import Navbar from "./components/Page1/Navbar";
import Page1Content from "./components/Page1/Page1Content";

const App = () => {
  return (
    <div>
      <Navbar />
      <Page1Content />
      {/* <Page1 />
      <Page2 /> */}
    </div>
  );
};

export default App;
