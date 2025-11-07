import React from "react";

const App = () => {
  const StoredValue = localStorage.getItem("user");
  console.log(StoredValue);
  localStorage.setItem("age", "20");
  const age = localStorage.getItem("age");
  console.log(age);
  localStorage.removeItem("user");
  localStorage.clear();

  const user = {
    username: "pranjal",
    age: 20,
    city: "Lucknow",
  };
  localStorage.setItem("user", JSON.stringify(user));//THIS IS USE TO CONVERT OBJECT TO STRING 
  console.log(user);
  const user1 = JSON.Parse(localStorage.getItem("user"));//AND IT IS USE TO CONVERT STRING TO OBJECT
  console.log(user1);
  return <div>App</div>;
};

export default App;
