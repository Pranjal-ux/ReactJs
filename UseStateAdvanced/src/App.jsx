import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const btnClicked = () => {
    setNum(10);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;
