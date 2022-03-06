import React from 'react'
import Link from "next/link";


import { BmcButton, ToggleNavBtn, ThemeSwitcher } from "../index.js";

const Header = () => {
	return (
    <header className="fixed w-full flex items-center justify-between h-14 text-white z-20 bg-[#111827]">
      <div className="flex items-center justify-start md:justify-center pl-3 w-20 lg:w-64 h-full">
        {/* eslint-disable-next-line */}
        <img
          className="w-7 h-7 lg:w-10 lg:h-10 mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
        />
        <h2 className="">
		<Link href="/" className="text-xl sm:text-lg md:text-2xl lg:text-3xl text-white logo">
          <a>Crypto Ranking</a>
        </Link>
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
}

export default Header
