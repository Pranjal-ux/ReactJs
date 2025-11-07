import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/todos"
    // );
    // const data = await response.json();
    // console.log(data);
    // console.log(response);
    // console.log("Data mil gaya");
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    console.log(response);
    setData(response.data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((e, idx) => {
          return (
            <h2>
              Hello{e.author}
              {idx}
            </h2>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default App;
