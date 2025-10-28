import React from "react";

import RightCardContent from "./RightCardContent";
const RightCard = () => {
  return (
    <div className="h-full  shrink-0 w-60 rounded-4xl overflow-hidden relative ">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1649175970893-4698edbb885b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb24lNUR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        alt="img01"
      />
      <RightCardContent />
    </div>
  );
};

export default RightCard;
