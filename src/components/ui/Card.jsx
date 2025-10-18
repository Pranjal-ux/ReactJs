import React from "react";
import { Button } from "./button";

const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="card  w-[500px] text-white border-2 rounded-2xl p-[30px] bg-fuchsia-950 ">
        <h1 className="text-center text-3xl underline">{props.user}</h1>
        <p className="p-5 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          repudiandae nostrum, voluptate amet omnis, sint repellendus recusandae
          minima magnam earum nulla nam pariatur quos dolore suscipit quidem
          modi laboriosam obcaecati.
        </p>
        <div className="flex justify-center">
          <Button className="w-[200px] text-center">Verify</Button>
        </div>
      </div>
    </>
  );
};

export default Card;
