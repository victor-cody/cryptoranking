import Link from "next/link";

//redux state management
import { useSelector } from "react-redux";

import { Badge } from "antd";
import {
  HomeFilled,
  MoneyCollectFilled,
  BulbOutlined,
  // FundOutlined,
} from "@ant-design/icons"; //antdesign icons

//navbar items
import { NavbarItem, CurrencyRange } from "../index";

const NavBar = () => {
  const showNavBar = useSelector((state) => state.navBarState.showNavBar);

  return (
    <nav
      className={`fixed flex [flex: 0.2] flex-col left-0 top-10 w-0 ${
        showNavBar ? "!w-60" : ""
      } md:w-0 lg:w-60 bg-[#1f2937] h-full text-white transition-all duration-300 border-none z-10 m-"`}
    >
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow px-3 pt-4">
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
          {/* <NavbarItem icon={<FundOutlined />}>
            <Link href="/exchanges">exchanges</Link>
          </NavbarItem> */}
          <NavbarItem
            icon={
              <Badge dot>
                <BulbOutlined style={{ color: "#fff" }} />
              </Badge>
            }
          >
            <Link href="/news">news</Link>
          </NavbarItem>
        </ul>
      </div>
        <CurrencyRange />
    </nav>
  );
};

export default NavBar;
