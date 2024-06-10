import React from "react";
import Login from "../pages/LoginPage/Login";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
