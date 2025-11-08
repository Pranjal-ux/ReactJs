import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./component/Card";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setUserData(response.data);
  };
  useEffect(() => {
    getData();
  }, [index]);
  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 translate-1/2">
      Loading..
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map((e, idx) => {
      return (
        <div key={idx}>
          <Card e={e} />
        </div>
      );
    });
  }

  return (
    <div className="h-screen bg-black overflow-auto text-whites ">
      <div className="text-white flex flex-wrap  gap-12  ">{printUserData}</div>
      <div className="flex  justify-center items-center gap-4 mb-3 fixed bottom-1 left-1/2 -mx-11   ">
        <button
          onClick={() => {
            if (index > 1) setIndex(index - 1);
            setUserData([]);
          }}
          className="bg-yellow-500 px-7 py-2 text-sm active:scale-20 rounded-lg "
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-yellow-500 px-7 py-2 text-sm active:scale-20 rounded-lg "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
