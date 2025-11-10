import React, { useContext } from "react";
import Nav2 from "../components/Nav2";
import { ThemeDataContext } from "../src/App";
const Navbar = (props) => {
  const data = useContext(ThemeDataContext);
  console.log(data);
  return (
    <div className="nav">
      <h1>{data}</h1>
      {props.children}
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default Navbar;
