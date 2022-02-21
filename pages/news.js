import React from "react";
import { RoughNotation } from "react-rough-notation";


const News = () => {
  return (<div>
    <RoughNotation customElement="h2" className="text-2xl font-semibold mb-5" type="highlight" color="#fff176 " show={true}>
            Crypto News
          </RoughNotation>
  </div>);
};

export default News;
