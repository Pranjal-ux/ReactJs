import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.e.url} target="_blank">
        <div className="h-40 w-44 rounded-xl overflow-hidden mt-3 ">
          <img
            className="h-full w-full object-cover  "
            src={props.e.download_url}
            alt="image not found!!"
          />
        </div>

        <h2 className="font-bold text-lg text-white mt-1">{props.e.author}</h2>
      </a>
    </div>
  );
};

export default Card;
