import React, { createContext, useState } from "react";
import Navbar from "../components/Navbar";
export const ThemeDataContext= createContext()

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <Navbar theme={theme}></Navbar>
    </div>
  );
};

export default App;
