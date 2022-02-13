import { Avatar, Badge, Typography, Button } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

import icon from "../../../public/images/cryptocurrency.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-full p-5 bg-[#111827]">
      <span className="mr-2">
        <Badge dot>
          <Avatar
            // shape="circle"
            src={icon}
            size="large"
            // style={{
            //   backgroundColor: "#0071bd",
            //   width: "80px",
            // }}
            // icon={<UserOutlined />}
          />
        </Badge>
      </span>
      <Typography.Title level={3} className="ml-3">
        <Link href="/">
          <a>Cryptoverse</a>
        </Link>
      </Typography.Title>
      <Button className="!hidden absolute right-[10px] top-[25px] text-lg !border-none  md:!block">
        <MenuOutlined />
      </Button>
    </div>
  );
};

export default Logo;
