import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 py-4">
      <h4 className="bg-black text-white rounded-xl px-4 py-1 uppercase">
        Target Audience
      </h4>
      <button className="bg-gray-500 text-white rounded-xl uppercase px-5 py-1 tracking-widest text-sm">
        digital banking system
      </button>
    </div>
  );
};

export default Navbar;
