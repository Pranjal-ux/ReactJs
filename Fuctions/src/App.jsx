import React from "react";

const App = () => {
  // const btnClick = () => {
  //   console.log("Done");
  // };
  // const mouseEnter = () => {
  //   console.log("Entry Not Allowed!!");
  // };
  return (
    <div
      onWheel={(e) => {
        console.log("Page is Scrolling at speed......", e.deltaY);
      }}
      className="h-screen w-screen bg-black text-white   items-center "
    >
      {/* <h1 className="text-4xl uppercase underline font-mono m-2">Click me~</h1>
      <button
        onMouseEnter={() => {
          console.log("Entry Clos!!!");
        }}
        onClick={() => {
          console.log("Mouse Clicked");
        }}
        className="bg-blue-300 w-[200px] m-4 rounded-2xl h-[50px] cursor-pointer"
      >
        Change User
      </button>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        className="opacity-60 w-[400px] h-[40px] shadow-lg shadow-blue-200 text-center text-white"
        type="text"
        placeholder="Enter your text"
      /> */}
      <div className="bg-blue-950  min-h-screen w-full text-white">page1</div>
      <div className="bg-slate-700 min-h-screen w-full text-white ">page2</div>
      <div className="bg-teal-500  min-h-screen w-full text-white">page3</div>
    </div>
  );
};

export default App;
