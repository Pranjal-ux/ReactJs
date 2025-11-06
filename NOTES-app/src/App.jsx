import React, { useState } from "react";

const App = () => {
  return (
    <div className=" bg-black h-screen">
      <form className="flex items-start   p-10 " action="">
        <div className="flex w-1/2 flex-col gap-3 items-start relative ">
          <input
            className="text-white px-4 h-20  w-full border-2 outline-none rounded font-medium"
            type="text"
            placeholder="Enter your Note Heading"
          />
          <textarea
            className=" h-40  px-2 w-full  text-white border-2 outline-none rounded font-medium"
            placeholder="Writing your Details"
            type="text"
          />
          <button className="bg-white w-full px-5 py-7 rounded outline-none text-black font-medium ">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
