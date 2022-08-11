import Control from "components/control/Control";
import Menu from "components/menu/Menu";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className=" h-[900px] relative lg:grid lg:grid-cols-5 p-8 bg-[#191a1f] rounded-lg text-text1 pb-10">
      <Menu></Menu>
      <Outlet></Outlet>
      <Control></Control>
    </div>
  );
};

export default MainLayout;
