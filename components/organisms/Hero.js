import React from 'react';
import { RoughNotation } from "react-rough-notation";
import { BmcButton, GithubStars } from "../index.js";

const Hero = () => {
	return (
    <div className="flex items-center justify-center h-auto min-h-[90vh] lg:h-[90vh] xl:h-[90vh] w-full flex-col lg:flex-row xl:flex-row overflow-hidden -mt-10  mb-4 py-4 sm:py-0 sm:mb-0">
      <div className="w-full lg:w-8/12 xl:w-8/12 h-auto lg:h-full xl:h-full flex items-start justify-center flex-col pl-2 lg:pl-4 xl:pl-4 relative z-10 lg:py-0 xl:py-0 overflow-hidden !text-[#ECF2F5]">
		  <h3 className="text-sm lg:text-base xl:text-base bg-text-gradient font-bold mb-1 uppercase tracking-wider">
            200+ Cryptocurrencies. Sorting. Open Source. Categories.
          </h3>
        <h1 className="!text-[#03045e] font-bold text-3xl lg:text-[3rem] xl:text-[3rem] lg:leading-[3rem] my-2">
          The storehouse for info on all things {" "}<RoughNotation type="underline" animationDelay={2000} className="inline-bloack -pb-2" color="#03045e" show={true}> cryptocurrencies
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
		</div>
      </div>
      <div className="w-full lg:w-4/12 xl:w-4/12 sm:h-0 lg:h-full xl:h-full flex items-center justify-center flex-col relative bg-pattern-hero pt-10 pr-4 z-0 lg:pb-0 xl:pb-0">
		  <div className="absolute h-full w-full flex items-center justify-center">
		{/* eslint-disable-next-line */}
            <img
              src="/images/mobile-view.png"
              className="w-[220px] lg:w-[320px] xl:w-[320px] opacity-50 lg:opacity-100 xl:opacity-100 rotate-[30deg] shadow-lg"
            />
          </div>
	  </div>
    </div>
  );
};

export default Hero;
