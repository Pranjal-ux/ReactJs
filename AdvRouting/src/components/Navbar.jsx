import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center  bg-teal-950 justify-between px-4 py-8">
      <h2 className="text-3xl font-bold ">ReactRouter</h2>
      <div className="flex gap-5">
        <Link className="text-xl font-bold underline" to={"/"}>
          Home
        </Link>
        <Link className="text-xl font-bold underline" to={"/about"}>
          About
        </Link>
        <Link className="text-xl font-bold underline" to={"/product"}>
          Product
        </Link>
         <Link className="text-xl font-bold underline" to={"/courses"}>
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
