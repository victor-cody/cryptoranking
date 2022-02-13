import { useState, useEffect } from "react"; //react hooks
import { Menu, Badge } from "antd";
import {
  HomeFilled,
  MoneyCollectFilled,
  BulbOutlined,
  FundOutlined,
  BellFilled,
} from "@ant-design/icons"; //antdesign icons

import NavbarItem from "../../atoms/Navbar-Item/NavbarItem"; //navbar items
import Logo from "../../atoms/Logo/Logo"; //logo

const NavBar = () => {
  return (
    <nav className="fixed flex flex-col left-0 top-0 w-14 hover:w-64 md:w-64 bg-[#1f2937] h-full text-white transition-all duration-300 border-none z-10 m-0">
      <Logo />
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow px-2">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Main
              </div>
            </div>
          </li>
          <NavbarItem text="home" icon={<HomeFilled />} />
          <NavbarItem text="cryptocurrencies" icon={<MoneyCollectFilled />} />
          <NavbarItem text="exchanges" icon={<FundOutlined />} />
          <NavbarItem
            text="news"
            icon={
              <Badge color={"#000"} dot>
                <BellFilled />
              </Badge>
            }
          />
        </ul>
        <p className="mb-14 px-5 py-4 border-t-2 border-gray-100 hidden md:block text-center text-xs">
          Copyright @ {new Date().getFullYear()}
          <br />
          All Rights Reversed
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
