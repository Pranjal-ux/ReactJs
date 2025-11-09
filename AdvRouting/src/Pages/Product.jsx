import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-19 flex-row">
        <Link className="text-xl font-bold" to={"/product/men"}>
          Men
        </Link>
        <Link className="text-xl font-bold" to={"/product/women"}>
          Women
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
