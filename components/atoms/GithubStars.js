import React, { useEffect, useState } from "react";
import { GithubOutlined } from "@ant-design/icons";

const GithubStars = () => {
	const [starCount, setStarCount] = useState(1);

	//fetching the number of stars on the repo
	 const fetchStarCount = () => {
     fetch("https://api.github.com/repos/victor-cody/cryptoranking", {
         headers: {},
       })
       .then((response) => {
         setStarCount(response.data.stargazers_count);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   // fetch on load once
   useEffect(() => {
     fetchStarCount();
   }, []);
  return (
      <a
        className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
        href="https://github.com/victor-cody/cryptoranking"
        target="_blank"
        rel="noreferrer"
      >
        <div className="border-2 border-[#777] text-black px-4 py-[8px] lg:text-lg xl:text-lg capitalize rounded-md font-semibold flex items-center justify-center">
          Stars <span className="poppins ml-1">{starCount}</span>
          <GithubOutlined className="text-lg ml-1" />
        </div>
      </a>
    
  );
};

export default GithubStars;
