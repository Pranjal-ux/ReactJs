import React from "react";

const App = () => {
  const submitHandler  = (e)=>{
    e.preventDefault();//FOR TACKELING FORM DEFAULT FEATURE
    console.log("Form submitted")
  }
  return (
    <div>
      <form onSubmit={(e) =>{
submitHandler(e)
      }} className="" action="">
        <input type="text" placeholder="Enter your name " />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
