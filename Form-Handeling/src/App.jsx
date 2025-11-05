import React from "react";

const App = () => {

  return (
    <div>
      <form onSubmit={(()=>{
        console.log(Form submitted)
      })} className="" action="">
        <input type="text" placeholder="Enter your name " />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
