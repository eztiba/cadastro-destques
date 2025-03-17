"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, CircleSmall } from "lucide-react";

import { SideNavItem } from "@/types/sizeNavBar";

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className="border-tertiaryBlue flex w-full flex-row items-center rounded-lg border-2 p-2 font-bold"
          >
            <span className="flex flex-1 items-center justify-center gap-2 text-xl font-semibold text-white">
              {item.title}
            </span>
            <span className={`${subMenuOpen ? "rotate-270" : ""} flex`}>
              <ChevronDown size={20} />
            </span>
          </button>

          {subMenuOpen && (
            <div className="flex w-full flex-col items-center justify-between space-y-2 rounded-lg p-2">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`border-tertiaryBlue flex w-full flex-row items-center space-x-4 rounded-lg border-2 p-2 text-center ${
                      subItem.path === pathname ? "bg-tertiaryBlue" : ""
                    }`}
                  >
                    <span className="">
                      <CircleSmall />
                    </span>
                    <span className="flex flex-1 items-center justify-center text-white">{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`border-tertiaryBlue flex flex-row items-center space-x-4 rounded-lg border-2 p-2 text-center ${
            item.path === pathname ? "bg-tertiaryBlue" : ""
          }`}
        >
          <span className="flex flex-1 items-center justify-center text-xl font-semibold text-white">{item.title}</span>
        </Link>
      )}
    </div>
  );
};

export default MenuItem;
