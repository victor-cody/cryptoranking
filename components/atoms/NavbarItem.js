import React from "react";

//redux state management
import { toggleNavBar } from "../../redux/navBarState";
import { useDispatch } from "react-redux";

const NavbarItem = ({ children, icon }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span className="relative my-1 flex flex-row items-center h-11 focus:outline-none hover:bg-[#111827] rounded-md text-white-600 hover:!text-white-800 border-l-4 border-transparent cursor-pointer pr-6 pl-1">
        <span className="inline-flex justify-center items-center ml-1">
          {icon}
        </span>
        <span
          className="ml-2 text-sm font-semibold capitalize tracking-wide truncate"
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleNavBar());
          }}
        >
          {children}
        </span>
        {/* <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
            1.2k
          </span> */}
      </span>
    </li>
  );
};

export default NavbarItem;
