import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=32"
    );
    setUserData(response.data);
    console.log("Data mil gaya");
  };
  let printUserData = "No Data is found ";
  if (userData.length > 0) {
    printUserData = userData.map((e, idx) => {
      return (
        <div key={idx}>
          <div className="h-40 w-44 rounded-xl overflow-hidden ">
            <img
              className="h-full w-full object-cover  "
              src={e.download_url}
              alt="image not found!!"
            />
          </div>
          <h2 className="font-bold text-xl text-white mt-2">{e.author}</h2>
        </div>
      );
    });
  }

  return (
    <div className="h-screen bg-black overflow-auto text-whites ">
      <button
        onClick={getData}
        className="bg-teal-800 px-10 py-5 rounded m-3 w-[200px] text-white"
      >
        Get data
      </button>
      <div className="text-white flex flex-wrap  gap-12  ">{printUserData}</div>
    </div>
  );
};

export default App;
