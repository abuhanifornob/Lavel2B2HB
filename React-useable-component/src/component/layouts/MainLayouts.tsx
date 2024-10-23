import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
