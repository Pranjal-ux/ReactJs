import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(copyTask);
    setTitle("");
    setDetails("");
  };
  const delteNode = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className=" bg-[url('https://i.pinimg.com/736x/12/3c/fe/123cfe40019569fe437e3abb0d6974f6.jpg')] lg:flex overflow-auto h-screen">
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
        <button className="bg-white w-full px-5 py-7 rounded outline-none text-black font-medium lg:cursor-pointer active:scale-95">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 border-white p-4 ">
        <h1 className="text-4xl text-white underline uppercase font-mono lg:cursor-pointer">
          Recent notes!
        </h1>
        <div className="flex justify-start items-start flex-wrap mt-5 gap-4 h-[90%] overflow-auto  ">
          {task.map((e, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start flex-wrap relative h-60 w-50 border bg-cover rounded-xl text-neutral-00 bg-[url('https://imgs.search.brave.com/cGPlcnZxd9GhY3rzbFQ8l3mNo0iVjrIIO--xi8zEPQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaWxsdXN0cmF0/aW9uLXRlbXBsYXRl/LWRhaWx5LXBsYW5u/ZXItcGxhbm5pbmct/bGlzdC13b3JrLXBy/b2R1Y3Rpdml0eV85/NjQ2ODQtNzYwLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA')] pt-4 pb-4 p-3"
              >
                <div className=" whitespace-normal">
                  <h3 className=" text-3xl underline uppercase leading-tight font-bold mb-2  ">
                    {e.title}
                  </h3>
                  <p className="text-xl leading-tight font-mono overflow-auto wrap-break-word whitespace-normal">
                    {e.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    delteNode(idx);
                  }}
                  className=" tracking-tighter font-xl cursor-pointer font-semibold leading-tight px-10 py-1 bg-red-500 right-0  w-full bg-red border-2 rounded"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
