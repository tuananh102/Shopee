import React, { useEffect, useState } from "react";
import useQuery from "../../hooks/useQuery";
import ProductList from "./Product/ProductList";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Product;
