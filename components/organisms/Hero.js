import React from 'react';

const Hero = () => {
	return (
    <div className="flex items-center justify-center h-auto min-h-[95vh] lg:h-[95vh] xl:h-[95vh] w-full flex-col lg:flex-row xl:flex-row overflow-hidden  -mt-10 bg-purple-500 !text-[#ECF2F5] mb-4">
      <div className="w-full lg:w-6/12 xl:w-6/12 h-auto lg:h-full xl:h-full flex items-start justify-center flex-col pl-4 lg:pl-10 xl:pl-10 relative z-10 py-4 lg:py-0 xl:py-0 overflow-hidden">
		  <h3 className="text-sm lg:text-base xl:text-base bg-text-gradient font-bold mb-2 uppercase tracking-wider">
            200+ Cryptocurrencies. Sorting. Open Source. Categories.
          </h3>
        <h1 className="font-bold text-3xl lg:text-[2.75rem] xl:text-[2.75rem] lg:leading-[3rem] my-2">
          The web storehouse for cryptocurrencies info.
        </h1>
        <p className="text-light text-[#ECF2F5] my-2 mt-3 text-xs lg:text-sm xl:text-sm">
          Crypto Ranking is the online storehouse for all things crypto, with
          in-depth data about all cryptocurrencies, crypto markets, exchanges,
          popular cryptocurrency news and much more all in a single web
          application, and much more features, make the app amazing! 🤟
        </p>
      </div>
      <div className="w-full lg:w-6/12 xl:w-6/12 h-auto lg:h-full xl:h-full flex items-center justify-center flex-col relative bg-pattern-hero pb-10 lg:pb-0 xl:pb-0">
		  <div className="absolute h-full w-full flex items-center justify-center">
		{/* eslint-disable-next-line */}
            <img
              src="/favicon.ico"
              className="w-[320px] lg:w-[420px] xl:w-[420px] opacity-50 lg:opacity-100 xl:opacity-100"
            />
          </div>
	  </div>
    </div>
  );
};

export default Hero;
