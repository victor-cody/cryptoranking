import React, { useEffect, useState } from "react";
import axios from "axios"; // axios

import { GithubOutlined } from "@ant-design/icons";

const GithubStars = () => {
	const [starCount, setStarCount] = useState(1);

	//fetching the number of stars on the repo
	 const fetchStarCount = () => {
     axios.get("https://api.github.com/repos/victor-cody/cryptoranking", {
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
        className="!p-0 !w-auto !h-auto !m-auto shine !ml-1 bg-transperant text-black hover:!text-black cursor-pointer"
        href="https://github.com/victor-cody/cryptoranking"
        target="_blank"
        rel="noreferrer"
      >
        <div className="border-2 border-black !text-black hover:!text-black px-4 py-[8px] lg:text-base xl:text-base capitalize rounded-md font-semibold flex items-center justify-center">
          Stars <span className="poppins mx-1">{starCount}</span>
          <GithubOutlined className="text-lg" />
        </div>
      </a>
    
  );
};

export default GithubStars;
