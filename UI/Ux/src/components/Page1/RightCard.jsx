import React from "react";

import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
  return (
    <div className="h-full  shrink-0 w-60 rounded-4xl overflow-hidden relative ">
      <img className="h-full w-full object-cover" src={props.img} alt="img01" />
      <RightCardContent tag={props.tag} id={props.id} />
    </div>
  );
};

export default RightCard;
