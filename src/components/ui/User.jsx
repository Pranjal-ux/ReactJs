import React from "react";
const User = (props) => {
  console.log(props);

  return <div className="text-white">Pranjal,{props.name}</div>;
};

export default User;
