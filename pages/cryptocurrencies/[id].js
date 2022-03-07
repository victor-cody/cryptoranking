import Link from "next/link";
import React, { useState, useEffect } from "react";

// import Image from "next/image";

//hrml parser
import HTMLReactParser from "html-react-parser";

// use router for params
import { useRouter } from "next/router";

import millify from "millify";

// antd components
import { Row, Col, Card, Select } from "antd";

// icons
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import {useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetCryptosQuery} from "../api/cryptoApi.js";

import {
  CryptoStatsRow,
  CryptoChart,
  TimeRange, Loader,
} from "../../components/index.js";

const CryptoDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [timeperiod, setTimeperiod] = useState("7d");

  // time
  const timeRange = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

  const { data, isFetching } =
    useGetCryptoDetailsQuery(id);
  const { data: coinHistory} = useGetCryptoHistoryQuery({coinId: id, timeperiod});
  // console.log(coinHistory);

	//
	const cryptoDetails = data?.data?.coin;

  //
  const stats = [
    {
      title: "Price to USD",
      value: `$${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      // icon: <DollarCircleOutlined style={{color:"#52b788"}} />,
    },
    // {
    //   title: "Volume (24h)",
    //   value: `$ ${cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])}`,
    //   icon: <ThunderboltOutlined />,
    // },
    {
      title: "Market Cap",
      value: `$${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      // icon: <DollarCircleOutlined style={{color:"#52b788"}} />,
    },
    {
      title: "Popularity",
      value: `#${cryptoDetails?.rank}`,
      // icon: <NumberOutlined />,
    },
    {
      title: `Price Changed (${timeperiod})`,
      value: (
        <span
          className={`${
            cryptoDetails?.change.includes("-")
              ? "text-red-500"
              : "text-green-600"
          }`}
        >
          {" "}
          {cryptoDetails?.change}%{" "}
        </span>
      ),
      // icon: <FundOutlined style={{color:"#013a63"}} />,
    },
    {
      title: "All time high (daily avg)",
      value: `$${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      // icon: <TrophyOutlined style={{color:"#f3722c"}} />,
    },
  ];

  //
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      // icon: <FundOutlined style = {{color:"#013a63"}} />,
    },
    {
      title: "Total Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      // icon: <MoneyCollectOutlined style = {{color:"#ae2012"}} />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      // icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      // icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      // icon: <ExclamationCircleOutlined />,
    },
  ];

    //if the data is not yet fetched, show a loading indicator
  if (isFetching) {
    return <Loader />;
  }

  return (
    <div>
      <section>
        <Row gutter={[2, 2]}>
          <Col
            xs={24}
            className="flex justify-start items-center text-blue-500 !text-xl"
          >
            <Link
              className=""
              href="/cryptocurrencies"
              title={`View cryptocurrencies stats`}
            >
              <a>Crypto Charts</a>
            </Link>

            <svg height="9" viewBox="0 0 5 9" width="5" className="mx-3">
              <path d="M5 4.5a.503.503 0 01-.143.348L.903 9 0 8.303 3.622 4.5 0 .697.903 0l3.954 4.152c.095.1.143.224.143.348z"></path>
            </svg>

            <Link
              className="capitalize"
              href={`/cryptocurrencies/${cryptoDetails?.uuid}`}
              title={`View ${cryptoDetails?.name} stats`}
            >
              <a>{cryptoDetails?.name}</a>
            </Link>
          </Col>

          <Col
            span={24}
            className="flex justify-start items-center pt-5 pb-5 border-b-2 border-gray-200 mb-2"
          >
            {
              // eslint-disable-next-line
              <img
                src={cryptoDetails?.iconUrl}
                alt={`${cryptoDetails?.name} logo`}
                className="w-10 h-10 mr-3"
              />
            }

            <h2 className="font-semibold text-3xl">{cryptoDetails?.name}</h2>
            <span className="text-gray-600 text-base ml-2 mt-1">
              ({cryptoDetails?.symbol} / USD)
            </span>
            
          </Col>
        </Row>
      </section>

      <TimeRange setTime={setTimeperiod} time={timeRange} timeperiod/>

      <CryptoChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)}
        coinName={cryptoDetails?.name}
      />

      <Row gutter={[32, 32]}>
        <CryptoStatsRow
          title="Market stats"
          stats={stats}
          description={`An overview showing the statistics of ${cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.`}
        />

        <CryptoStatsRow
          title="More stats info"
          stats={genericStats}
          description={`More generic stats on ${cryptoDetails?.name}.`}
        />
      </Row>

      <section className="">
        <Row gutter={[4, 4]}>
          <h2 className="heading-2">About {cryptoDetails?.name}</h2>
          <Col span={24} className="coin-description">
            <Card className="bg-white dark:bg-gray-800 shadow-md rounded">
              {HTMLReactParser(cryptoDetails?.description)}
            </Card>
          </Col>
        </Row>
      </section>

      <section className="">
        <h2 className="heading-2">Relevant Links</h2>

        <Col lg={12} sm={24}>
          <Card
            bordered={false}
            className="break-words bg-white dark:bg-gray-800 shadow-md rounded"
          >
            {cryptoDetails?.links?.map((link) => (
              <Row className="coin-link" key={link?.name}>
                <span className="flex items-center capitalize text-base"><ExclamationCircleOutlined className="text-blue-500 mr-1"/> {link?.type}</span>
                <a
                  className="text-blue-500"
                  href={link?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link?.name}
                </a>
              </Row>
            ))}
          </Card>
        </Col>
      </section>
    </div>
  );
};

export default CryptoDetails;
