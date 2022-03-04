import React from "react";

const BmcButton = () => {
  return (
      <a
	  className="!p-1 !w-auto !h-auto !m-auto shine !mx-1"
        href="https://www.buymeacoffee.com/molipa"
        target="_blank"
        rel="noreferrer"
      >
        {/* eslint-disable-next-line */}
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          className="h-10"
        />
      </a>
  );
};

export default BmcButton;
