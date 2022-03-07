import React from "react";
import {
  TwitterOutlined
} from "@ant-design/icons";

const TwitterBtn = () => {
  const twitterLink =
    "https://twitter.com/intent/tweet?text=Checkout%20cryptoranking-1.netlify.app%20by%20@Victor_codejs%0A%0A%20A%20300%20storehouse%20300%20for%20all%20things%20cryptocurrency.%20You%27ll%20love%20it!%F0%9F%94%A5%0A%0A%23DEVCommunity";

  return (
    <a
      className="!p-0 !w-auto !h-auto !m-auto shine !ml-2"
      href={twitterLink}
      target="_blank"
      rel="noreferrer"
    >
      <div className="bg-[#1A91DA] hover:bg-[#0F84B4] px-3 py-2 capitalize rounded-md font-semibold flex items-center justify-center text-white sm:text-[12px]">
        Share on Twitter
        <TwitterOutlined className="text-lg sm:text-[12px] ml-1" />
      </div>
    </a>
  );
};

export default TwitterBtn;
