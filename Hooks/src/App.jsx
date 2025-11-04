import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="relative flex justify-center items-center flex-row bg-black min-h-screen">
      <div className="absolute top-80  ">
        <h1 className="text-6xl font-bold text-center text-white">{num}</h1>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => {
              setNum(num + 1);
            }}
            className="h-[50px] w-[200px] rounded-lg text-center bg-slate-600 shadow-lg shadow-teal-700"
          >
            Increase!!
          </button>
          <button
            onClick={() => {
              setNum(num - 1);
            }}
            className="h-[50px] w-[200px] rounded-lg text-center bg-slate-600 shadow-lg shadow-teal-700"
          >
            Decrease!!
          </button>
          <button
            onClick={() => {
              setNum(num + 5);
            }}
            className="h-[50px] w-[200px] rounded-lg text-center bg-slate-600 shadow-lg shadow-teal-700"
          >
            Jump by 5!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
