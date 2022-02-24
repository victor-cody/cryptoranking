import { Badge, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

import icon from "../../../public/images/cryptocurrency.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-around max-w-full px-5 py-7 bg-[hsl(278, 100%, 25%)] ">
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
      <h2 className="text-white text-2xl font-[Lobster] hidden md:block">
        <Link href="/">
          <a>Cryptoverse</a>
        </Link>
      </h2>
      <Button className="lg!hidden absolute right-[10px] top-[25px] text-lg !border-none sm:!block">
        <MenuOutlined />
      </Button>
    </div>
  );
};

export default Logo;
