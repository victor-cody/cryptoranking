import { Avatar, Badge, Typography, Button } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

import icon from "../../../public/images/cryptocurrency.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-full px-5 py-7 bg-[#111827]">
      <span className="mr-2">
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
      </span>
      <Typography.Title level={3}>
        <Link href="/">
          Cryptoverse
        </Link>
      </Typography.Title>
      <Button className="!hidden absolute right-[10px] top-[25px] text-lg !border-none  sm:!block">
        <MenuOutlined />
      </Button>
    </div>
  );
};

export default Logo;
