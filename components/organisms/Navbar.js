import Link from "next/link";

//redux state management
import { useSelector } from "react-redux";

import { Badge } from "antd";
import {
  HomeFilled,
  MoneyCollectFilled,
  BulbOutlined,
  FundOutlined,
  BellFilled,
} from "@ant-design/icons"; //antdesign icons

//navbar items
import NavbarItem from "../atoms/NavbarItem";

//logo
import Logo from "../atoms/Logo";

const NavBar = () => {
  const showNavBar = useSelector((state) => state.navBarState.showNavBar);

  return (
    <nav
      className={`fixed flex [flex: 0.2] flex-col left-0 top-0 w-14 ${
        showNavBar ? "w-60" : ""
      } md:w-16 lg:w-64 bg-[#1f2937] h-full text-white transition-all duration-300 border-none z-10 m-"`}
    >
      <Logo />
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow px-3">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden lg:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Main
              </div>
            </div>
          </li>
          <NavbarItem icon={<HomeFilled />}>
            <Link href="/">home</Link>
          </NavbarItem>
          <NavbarItem icon={<MoneyCollectFilled />}>
            <Link href="/cryptocurrencies">cryptocurrencies</Link>
          </NavbarItem>
          <NavbarItem icon={<FundOutlined />}>
            <Link href="/exchanges">exchanges</Link>
          </NavbarItem>
          <NavbarItem
            icon={
              <Badge dot>
                <BulbOutlined color="#fff" />
              </Badge>
            }
          >
            <Link href="/news">news</Link>
          </NavbarItem>
        </ul>
        <p className="mb-0 px-5 pt-6 pb-4 bg-[#1f2937] hidden lg:block text-center text-sm tracking-wide">
          <span className="text-base pb-2">
            Made with 💖 by{" "}
            <a
              href="https://twitter.com/Victor_codejs"
              className="text-blue-600"
            >
              Victor
            </a>
          </span>
          <br className="pb-1" />
          Copyright @ {new Date().getFullYear()}
          <br />
          All Rights Reversed
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
