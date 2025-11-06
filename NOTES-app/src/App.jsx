import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(details);
    setTitle("");
    setDetails("");
  };
  return (
    <div className=" bg-[#1a1c1d] lg:flex overflow-hidden h-screen">
      <form
        onSubmit={submitHandler}
        className="flex gap-3 lg:w-1/2 items-start flex-col p-6  "
        action=""
      >
        <h1 className="text-4xl font-mono text-white">Add notes!</h1>
        {/* First input for heading */}
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="text-white px-4 h-20  w-full border-2 outline-none rounded font-medium"
          type="text"
          placeholder="Enter your Note Heading"
        />
        {/* Detailed input for notes */}
        <textarea
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className=" h-40 resize-none px-2 w-full  text-white text- border-2 outline-none rounded font-medium"
          placeholder="Writing your Details"
          type="text"
        />
        <button className="bg-white w-full px-5 py-7 rounded outline-none text-black font-medium ">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 border-white p-4 ">
        <h1 className="text-4xl text-white underline uppercase font-mono lg:cursor-pointer">
          Recent notes!
        </h1>
        <div className="flex flex-wrap mt-5 gap-3 h-full overflow-auto ">
          <div className=" h-50 w-40 border rounded-xl bg-white  "></div>
          <div className="h-50 w-40 border rounded-xl bg-white  "></div>
          <div className="h-50 w-40 border rounded-xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
