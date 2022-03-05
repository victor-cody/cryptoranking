//redux state management
import { useSelector, useDispatch } from "react-redux";
import { toggleNavBar } from "../../redux/navBarState";

import { Button } from "antd";
import { AlignLeftOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";

// import icon from "/images/cryptocurrency.png";

const Logo = () => {
  const showNavBar = useSelector((state) => state.navBarState.showNavBar);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-around max-w-full px-5 py-7 bg-[#111827] ">
      {/* <span className="mr-2">
        <Badge dot>
          <Avatar
            shape="circle"
            // src={icon}
            size={40}
            // size={"large"}
            style={{
              backgroundColor: "#0071bd",
            }}
            icon={<UserOutlined />}
          />
        </Badge>
      </span> */}
      <h2
        className={`text-white text-2xl font-[Lobster] hidden lg:block ${
          showNavBar ? "block" : "hidden"
        } logo`}
      >
        <Link href="/">
          <a>Crypto Base</a>
        </Link>
      </h2>
      <Button
        className="lg:!hidden lg:!hidden absolute right-[10px] top-[10px] text-lg hover:bg-inherit !border-none bg-inherit sm:!block"
        onClick={(e) => {
          e.preventDefault();
          dispatch(toggleNavBar());
        }}
      >
        {showNavBar ? (
          <CloseOutlined className="hover:bg-inherit bg-inherit"
            style={{ color: "#fff" }}
          />
        ) : (
          <AlignLeftOutlined className="hover:bg-inherit bg-inherit"
            style={{ color: "#fff" }}
          />
        )}
      </Button>
    </div>
  );
};

export default Logo;
