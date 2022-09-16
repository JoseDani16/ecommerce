import React from "react";
import { Outlet } from "react-router-dom";
import CategoryItemSelector from "../components/CategoryItemSelector";

const LayoutProduct = () => {
  return (
    <>
      <CategoryItemSelector />
      <Outlet />
    </>
  );
};

export default LayoutProduct;
