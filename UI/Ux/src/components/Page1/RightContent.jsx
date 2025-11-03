import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className=" h-full overflow-x-auto rounded-2xl p-4 flex flex-nowrap gap-5 w-2/3  ">
      {props.user.map((e, idx) => {
        return (
          <RightCard
            key={idx}
            color={e.color}
            id={idx}
            img={e.img}
            tag={e.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
