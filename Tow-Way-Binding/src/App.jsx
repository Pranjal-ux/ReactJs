import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted  by ", title);
    setTitle('')
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=""
        action=""
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter your name "
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
