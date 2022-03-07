import React from "react";
import { RoughNotation } from "react-rough-notation";
import { BmcButton, GithubStars, TwitterBtn } from "../index.js";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-auto min-h-[50vh] md:h-[50vh] lg:h-[78vh] xl:h-[70vh] w-full flex-col lg:flex-row xl:flex-row overflow-hidden mb-4 sm:mb-0">
      <div className="w-full h-auto lg:h-full xl:h-full flex items-start justify-center flex-col pl-2 lg:pl-4 xl:pl-4 relative z-10 lg:py-0 xl:py-0 overflow-hidden !text-[#ECF2F5]">
        <h3
          className="text-sm lg:text-base xl:text-base bg-text-gradient font-bold mb-1 uppercase tracking-wider"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-easing="ease-in"
        >
          100+ Cryptocurrencies. Categories. Open Source. Sorting.
        </h3>
        <h1
          className="!text-[#03045e] font-semibold text-3xl lg:text-[3rem] xl:text-[3rem] lg:leading-[3rem] my-2"
          data-aos="fade-left"
          data-aos-delay="1350"
          data-aos-easing="ease-in"
        >
          The storehouse for info on all things{" "}
          <RoughNotation
            type="underline"
            animationDelay={3000}
            className="inline-bloack -pb-2"
            color="#03045e"
            show={true}
          >
            {" "}
            cryptocurrencies
          </RoughNotation>
        </h1>
        <p className="!text-gray-800 my-2 mt-3 text-xs lg:text-sm xl:text-sm">
          Crypto Ranking is an online storehouse for all things crypto, with
          in-depth data about all cryptocurrencies, crypto markets, exchanges,
          popular cryptocurrency news and much more all in a single web
          application, and much more features, makes the app amazing! 🤟
        </p>
        <div className="flex mt-2">
          <BmcButton /> <GithubStars />
            <TwitterBtn />
        </div>
      </div>
    </div>
  );
};

export default Hero;
