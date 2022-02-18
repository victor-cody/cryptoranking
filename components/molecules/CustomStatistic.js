import React from "react";

const CustomStatistic = ({title, value, titleStyles, valueStyles}) => {
  return (
    <div
      className="mb-1 lg:mb-0 break-words bg-white dark:bg-gray-800 shadow-md rounded"
      style="padding-left: 16px; padding-right: 16px;"
    >
      <div className="box-border p-0 m-0 [font-variant: tabular-nums] [line-height: 1.5715] [font-feature-settings: 'tnum'] list-none ">
        <div className={`text-xl mb-2 text-gray-400 ${titleStyles}`}>
          {title}
        </div>
        <div className="text-3xl text-black ">
          <span className={`inline-block ${valueStyles}`}>
            {value}
            </span>
        </div>
      </div>
    </div>
  );
};

export default CustomStatistic;
