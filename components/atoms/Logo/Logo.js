import { Badge, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

// import icon from "/images/cryptocurrency.png";

const Logo = ({toggleSideBar}) => {
  
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
      <h2 className="text-white text-2xl font-[Lobster] hidden md:block logo">
        <Link href="/">
          <a>Crypto Base</a>
        </Link>
      </h2>
      <Button className="lg:!hidden md:!hidden absolute right-[10px] top-[10px] text-lg hover:bg-inherit border-none sm:!block">
        <MenuOutlined style={{color:"#fff"}} onClick={(e) => {
          e.preventDefault();
          toggleSideBar(prevValue => !prevValue);
        } } />
      </Button>
    </div>
  );
};

export default Logo;
