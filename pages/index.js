import { Row } from "antd";
import millify from 'millify';
import Link from "next/link";

import { CryptoStats } from "../components";
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

  const { data, isFetching, isSuccess, isError, error } = useGetCryptosQuery(); //useGetCryptosQuery is a custom hook that returns the data, loading, and error from the endpoint

  let content;

  const globalStats = data?.data?.stats;

  //if the data is not yet fetched, show a loading indicator
  if (isFetching) {
    content =  <div>Loading...</div>;
  }
  //if the data is fetched and there is no error, show the data
  if (isSuccess && !isError) {
    content =  (
      <Row gutter={[32, 24]}>
        <CryptoStats title="Total Cryptocurrencies" value={globalStats.total} />
        <CryptoStats title="Total Exchanges" value={millify(globalStats.totalExchanges)}/>
        <CryptoStats title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} />
        <CryptoStats title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} />
        <CryptoStats title="Total Markets" value={millify(globalStats.totalMarkets)}/>
      </Row>
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
      <h2 className="text-2xl font-semibold mb-4">Global Crypto Stats</h2>
      {content}
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-2xl font-bold mb-2">Top 10 Cryptocurrencies in the World</h2>
        <h3 className="mt-0 text-xl"><Link href="/cryptocurrencies">Show More</Link></h3>
      </div>
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-2xl font-bold mb-2">Latest Crypto News</h2>
        <h3 className="mt-0 text-xl"><Link href="/news">Show More</Link></h3>
      </div>
    </main>
  );
}
