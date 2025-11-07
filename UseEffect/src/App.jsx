import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);
  useEffect(() => {
    console.log("use effect is running....");
  }, [num]);

  return (
    <div>
      <h1>Value of num is{num}</h1>
      <h2>Value of user is{num2}</h2>
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 5);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
