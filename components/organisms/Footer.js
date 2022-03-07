import React from "react";
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-auto min-h-[17rem] bg-[#f1f6ff] pt-4 pb-4 px-2 mt-10">
      <ul className="flex items-center justify-around py-2 mb-2 w-[80%] lg:w-[50%] xl:w-[50%]">
        <li className="">
          <a
            href="https://twitter.com/Victor_codejs"
            className="text-lg sm:text-[14px] flex items-center justify-between text-blue-600"
          >
            <TwitterOutlined className="mr-2"/>
            Twitter
          </a>
        </li>
        <li className="">
          <a
            href="https://www.linkedin.com/in/victor-ikechukwu-6248941b5/"
            className="text-lg sm:text-[14px] flex items-center justify-between text-blue-600"
          >
            <LinkedinOutlined className="mr-2"/>
            Linkedin
          </a>
        </li>
        <li className="">
          <a
            href="https://github.com/victor-cody"
            className="text-lg sm:text-[14px] flex items-center justify-between text-blue-600"
          >
            <GithubOutlined className="mr-2"/>
            Github
          </a>
        </li>
      </ul>
      <p className="text-base text-center tracking-wide mt-1 pt-3 pb-4 border-t-2 border-gray-300">
        <span className="text-base pb-2">
          Made with Next.js, redux-toolkit, TailwindCSS and 💖 by{" "}
          <a href="https://twitter.com/Victor_codejs" className="text-blue-600">
            Victor
          </a>
        </span>
        <br className="pb-1" />
        Copyright Crypto Ranking @ {new Date().getFullYear()}
        <br />
        All Rights Reversed
      </p>
    </footer>
  );
};

export default Footer;
