"use client";

import React from "react";
import { SIDENAV_ITEMS } from "@/components/NavBar/constants";
import MenuItem from "@/components/MenuItem";

const SideNav = () => {
  return (
    <nav className="bg-secundaryBlue fixed hidden h-screen flex-1 border-r text-white md:flex md:w-60">
      <div className="m-4 flex w-full flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
