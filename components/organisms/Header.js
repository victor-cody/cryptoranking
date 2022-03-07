import React from "react";
import Link from "next/link";

import { Badge } from "antd";
import { BmcButton, ToggleNavBtn } from "../index.js";

const Header = () => {
  return (
    <header className="fixed w-full flex items-center justify-between h-14 text-white z-20 bg-[#111827]">
      <div className="flex items-center justify-start md:justify-center pl-4 w-54 lg:w-64 h-full">
        <h2 className="">
          <Badge dot>
            <Link href="/">
              <a className="font-bold text-base sm:text-lg md:text-2xl lg:text-2xl text-white hover:text-white logo">
                Crypto Ranking
              </a>
            </Link>
          </Badge>
        </h2>
      </div>
      <div className="flex justify-end items-center w-[calc(100% - 3.5rem)] lg:w-[calc(100% - 16rem)]">
        <ul className="flex justify-around items-center pr-4">
          <li className="">
            <BmcButton />
          </li>
          <li className="">
            <ToggleNavBtn />
          </li>
          {/* <li className="">
					<ThemeSwitcher />
				</li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
