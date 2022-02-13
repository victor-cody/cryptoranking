import React from "react";
import Link from "next/link";

const NavbarItem = ({ text, icon }) => {
  return (
    <li>
      <Link href="/">
        <a className="relative my-1 flex flex-row items-center h-11 focus:outline-none hover:bg-[#111827] rounded-md text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6">
          <span className="inline-flex justify-center items-center ml-4">
            {icon}
          </span>
          <span className="ml-2 text-sm font-semibold capitalize tracking-wide truncate">
            {text}
          </span>
          {/* <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
            1.2k
          </span> */}
        </a>
      </Link>
    </li>
  );
};

export default NavbarItem;