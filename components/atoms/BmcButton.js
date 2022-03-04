import React from "react";

const BmcButton = () => {
  return (
    <button className="!p-0 !w-auto !h-auto !m-auto shine !ml-1">
      <a
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
    </button>
  );
};

export default BmcButton;
