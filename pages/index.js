import { Row } from "antd";
import millify from 'millify';

import { CryptoStats } from "../components";
import { useGetCryptosQuery } from "../services/cryptoApi"; //endpoint to query the coinranking api on rapidapi and return the crypto stats

export default function Home() {
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
        <CryptoStats title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        <CryptoStats title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} />
        <CryptoStats title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} />
        <CryptoStats title="Total Markets" value={millify(globalStats.totalMarkets)} />
      </Row>
    );
  }
  //if the data is fetched/not yet fetched and there is an error, show the error
  if ((isSuccess && isError) || (!isFetching && isError)) {
    content = <div>{error}</div>;
  }


  return (
    <main className="w-full">
      <h2 className="text-2xl font-normal mb-2">Global Crypto Stats</h2>
        {content}
    </main>
  );
}
