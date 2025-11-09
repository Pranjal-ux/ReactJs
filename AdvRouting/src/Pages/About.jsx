import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  const btnclick = () => {
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={btnclick}
        className="bg-blue-700 px-3 rounded-lg active:scale-30 py-3 cursor-pointer"
      >
        Return to Home
      </button>
      <h1>About!</h1>
    </div>
  );
};

export default About;
