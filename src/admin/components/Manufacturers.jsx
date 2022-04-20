import React from "react";
import { Outlet } from "react-router-dom";

const Manufacturers = () => {
  return (
    <div className="admin-manufacturer">
      <Outlet />
    </div>
  );
};

export default Manufacturers;
