import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  // const btnClicked = () => {
  //   setNum((prev) => ({ ...prev, age: 50 }));
  // };

  //batch update
  const btnClicked = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;
