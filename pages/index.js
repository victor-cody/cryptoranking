import React, { useEffect, useState } from "react";
import { Row } from "antd";
import millify from 'millify';
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


import { CryptoStats, GridLoadingSkeleton} from "../components";
import Cryptocurrencies from './cryptocurrencies';
import { useGetCryptosQuery } from "./api/cryptoApi"; //endpoint to query the coinranking api on rapidapi and return the crypto stats

export default function Home() {
  //function to give the CryptoStats component headers diffrent colors
  function applyColors () {
    const CryptoStatsHeaders = document.querySelectorAll('.ant-statistic-title');
    console.log(CryptoStatsHeaders)

  //colors array
  const colors = ['#d13a79','#4083d2','#e68c7c','#545682', '#377d6f'];

    [...CryptoStatsHeaders].forEach((header,i) => {
      // header.className = `text-[${colors[i]}] font-bold text-lg mb-3`;
      header.style = `color:${colors[i]}; font-size: 15px; font-weight: 700;`;
    })
  }

  //useGetCryptosQuery is a custom hook that returns the data, loading, and error from the endpoint
  const { data, isFetching, isSuccess, isError, error } = useGetCryptosQuery(10); 

  // const {globalStats, setGlobalStats} = useState({})
  const {annotation, setAnnotation} = useState(false)
  
  let content;

  const globalStats  = data?.data?.stats;

  useEffect(() => {
    if (isSuccess && !isError) {
      // setGlobalStats(data?.data?.stats)
      applyColors()
      setAnnotation(true)
    }
    // eslint-disable-next-line
  }, [isFetching, isSuccess]) 

  //if the data is not yet fetched, show a loading indicator
  if (isFetching) {
    content = <GridLoadingSkeleton count={5} sm={24} lg={12} />;
  }
  //if the data is fetched and there is no error, show the data
  if (isSuccess && !isError) {
    content =  (
      <>
        <CryptoStats title="Total Cryptocurrencies" value={globalStats.total} />
        <CryptoStats title="Total Exchanges" value={millify(globalStats.totalExchanges)}/>
        <CryptoStats title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} />
        <CryptoStats title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} />
        <CryptoStats title="Total Markets" value={millify(globalStats.totalMarkets)}/>
      </>
    );
    applyColors()
    // setTimeOut(1500, applyColors)
  }
  //if the data is fetched/not yet fetched and there is an error, show the error
  if ((isSuccess && isError) || (!isFetching && isError)) {
    content = <div>{error}</div>;
  }


  return (
    <main className="w-full">
      <RoughNotationGroup show={annotation}>
        <h2 className="text-2xl font-semibold mb-5">
          Global{" "}
          <RoughNotation type="highlight" animationDelay={1000} color="#fff176">
            Crypto Stats
          </RoughNotation>
        </h2>
        <Row gutter={[32, 24]}>{content}</Row>

        <div className="flex justify-between items-center mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            Top 10{" "}
            <RoughNotation type="highlight" color="#e71da2">
              Cryptocurrencies
            </RoughNotation>{" "}
            in the World
          </h2>
          <h3 className="mt-0 text-lg font-bold">
            <Link href="/cryptocurrencies">
              <a>Show More</a>
            </Link>
          </h3>
        </div>
        <Cryptocurrencies simplified />

        <div className="flex justify-between items-center mt-10">
          <h2 className="text-2xl font-semibold mb-5">
            Latest Crypto{" "}
            <RoughNotation type="highlight" color="#2775ca">
              News
            </RoughNotation>
          </h2>
          <h3 className="mt-0 text-lg font-bold">
            <Link href="/news">
              <a>Show More</a>
            </Link>
          </h3>
        </div>
      </RoughNotationGroup>
    </main>
  );
}
