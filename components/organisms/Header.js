import React from 'react'

import { BmcButton, ToggleNavBtn } from "../index.js";

const Header = () => {
	return (
    <header className="fixed w-full flex items-center justify-between h-14 text-white z-20 ">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-full">
        {/* eslint-disable-next-line */}
        <img
          className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
        />
        <h2 className="hidden md:block">crypto ranking</h2>
      </div>
      <div className="flex justify-end items-center w-[calc(100% - 3.5rem)] lg:w-[calc(100% - 16rem)]">
			<ul className="flex justify-around items-center w-auto">
				<li className="">
					<BmcButton />
				</li>
				<li className="">
					<ToggleNavBtn />
				</li>
			</ul>
	  </div>
    </header>
  );
}

export default Header
