import React from "react";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";

const App = () => {
  const user = [
    {
      img: "https://images.unsplash.com/photo-1649175970893-4698edbb885b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb24lNUR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      color: "blue",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      color: "green",
      intro: "",
      tag: "UnderServed",
    },
    {
      img: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      color: "red",
      intro: "",
      tag: "UnderBanked",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      color: "yellow",
      intro: "",
      tag: "Unstaisfied",
    },
  ];
  return (
    <div>
      {/* <Navbar />
      <Page1Content /> */}

      <Page1 user={user} />
    </div>
  );
};

export default App;
