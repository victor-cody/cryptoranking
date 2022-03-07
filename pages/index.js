import React, { useEffect, useRef } from "react";
import { Row } from "antd";
import millify from 'millify';
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// components
import { Hero, CryptoStats, GridLoadingSkeleton} from "../components";

// pages
import Cryptocurrencies from './cryptocurrencies';
import CryptoNews from "./news";

// redux-toolkit to make api calls
import { useGetCryptosQuery } from "./api/cryptoApi";

export default function Home() {

  //function to give the CryptoStats component headers diffrent colors
  function applyColors() {
    const CryptoStatsHeaders = document.querySelectorAll(
      ".ant-statistic-title"
    );

    //colors array
    const colors = ["#d13a79", "#4083d2", "#e68c7c", "#545682", "#377d6f"];

    [...CryptoStatsHeaders].forEach((header, i) => {
      header.style = `color:${colors[i]}; font-size: 15px; font-weight: 700;`;
    });
  }

  // fetching data
  const { data, isFetching, isSuccess, isError, error } =
    useGetCryptosQuery(10);

  const annotation = useRef(false);

  let content; //content to be displayed

  const globalStats = data?.data?.stats;

  useEffect(() => {
    if (isSuccess && !isError) {
      applyColors();
      window.setTimeout(() => {
        annotation.current = true;
      }, 1200);
    }
    // eslint-disable-next-line
  }, [isFetching, isSuccess]);


  //if the data is not yet fetched, show a loading indicator
  if (isFetching) {
    content = <GridLoadingSkeleton count={5} sm={24} lg={8} />;
  }

  //if the data is fetched and there is no error, show the data
  if (isSuccess && !isError) {
    content = (
      <>
        <CryptoStats title="Total Cryptocurrencies" value={globalStats.total} />
        <CryptoStats
          title="Total Exchanges"
          value={millify(globalStats.totalExchanges)}
        />
        <CryptoStats
          title="Total Market Cap:"
          value={`$${millify(globalStats.totalMarketCap)}`}
        />
        <CryptoStats
          title="Total 24h Volume"
          value={`$${millify(globalStats.total24hVolume)}`}
        />
        <CryptoStats
          title="Total Markets"
          value={millify(globalStats.totalMarkets)}
        />
      </>
    );
  }
  
  //if the data is fetched/not yet fetched and there is an error, show the error
  if ((isSuccess && isError) || (!isFetching && isError)) {
    content = <div>{error}</div>;
  }

  return (
    <>
    <Hero />
    <main className="">
      <RoughNotationGroup show={annotation}>
        <h2 className="text-2xl font-semibold mb-5">
          Global{" "}
          <RoughNotation type="highlight" animationDelay="10000" color="#fff176">
            Crypto Stats
          </RoughNotation>
        </h2>
        <Row gutter={[32, 24]}>{content}</Row>

        <div className="flex justify-between items-center mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            Top 10 Cryptocurrencies in the World
          </h2>
          <h3 className="mt-0 lg:text-base sm:text-xs font-bold">
            <Link href="/cryptocurrencies">
              <a>Show More</a>
            </Link>
          </h3>
        </div>
        <Cryptocurrencies simplified />

        <div className="flex justify-between items-center mt-10">
          <h2 className="text-2xl font-semibold mb-5">Latest Crypto News</h2>
          <h3 className="mt-0 lg:text-base sm:text-xs font-bold">
            <Link href="/news">
              <a>Show More</a>
            </Link>
          </h3>
        </div>
        <CryptoNews simplified />
      </RoughNotationGroup>
    </main>
    </>
  );
}
