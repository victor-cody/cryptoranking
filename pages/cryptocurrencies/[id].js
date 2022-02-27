import Link from "next/link";
import React, { useState } from "react";

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

import { CryptoStatsRow, CryptoChart ,Loader } from "../../components/index.js";

//
const { Option, OptGroup } = Select;

const CryptoDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  
  const [timeperiod, setTimeperiod] = useState("7d");

  // time
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const { data, isFetching } =
    useGetCryptoDetailsQuery(id);
  const { data: coinHistory, isFetching: gettingHistory } = useGetCryptoHistoryQuery({coinId: id, timeperiod});
  // console.log(coinHistory);

	//
	const cryptoDetails = data?.data?.coin;

  // content to be displayed
  let content;


  //
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined style={{color:"#52b788"}} />,
    },
    // {
    //   title: "Volume (24h)",
    //   value: `$ ${cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])}`,
    //   icon: <ThunderboltOutlined />,
    // },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined style={{color:"#52b788"}} />,
    },
    {
      title: "Popularity",
      value: `#${cryptoDetails?.rank}`,
      icon: <NumberOutlined />,
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
      icon: <FundOutlined style={{color:"#013a63"}} />,
    },
    {
      title: "All time high (daily avg)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined style={{color:"#f3722c"}} />,
    },
  ];

  //
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined style = {{color:"#013a63"}} />,
    },
    {
      title: "Total Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined style = {{color:"#ae2012"}} />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
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
          <Col xs={24} className="flex justify-start items-center">
            <Link
              className=" text-xl"
              href="/cryptocurrencies"
              title={`View cryptocurrencies stats`}
            >
              <a>Price Charts</a>
            </Link>

            <svg height="9" viewBox="0 0 5 9" width="5" className="mx-4">
              <path d="M5 4.5a.503.503 0 01-.143.348L.903 9 0 8.303 3.622 4.5 0 .697.903 0l3.954 4.152c.095.1.143.224.143.348z"></path>
            </svg>

            <Link
              className="capitalize text-xl"
              href={`/cryptocurrencies/${cryptoDetails?.uuid}`}
              title={`View ${cryptoDetails?.name} stats`}
            >
              <a>{cryptoDetails?.name} Price</a>
            </Link>
          </Col>

          <Col span={24} className="flex justify-start items-center pt-5 pb-2 ">
            {
              // eslint-disable-next-line
              <img
                src={cryptoDetails?.iconUrl}
                alt={`${cryptoDetails?.name} logo`}
                className="w-10 h-10 mr-3"
              />
            }

            <h2 className="font-semibold text-3xl">{cryptoDetails?.name}</h2>
            <span className="text-gray-600 text-base ml-2 mt-2">
              ({cryptoDetails?.symbol} / USD)
            </span>
          </Col>
          <Col
            span={24}
            className="relative pt-5 pb-8 ml-3 dark:border-white-secondary after:absolute after:bottom-1 after:left-[10%] after:w-[70%] after:border-b-2 after:border-gray-400"
          >
            <p className="text-base text-gray-700">
              View {cryptoDetails?.name + "s"} live price in US Dollar (USD),
              value statistics, market cap, supply and more.
            </p>
          </Col>
        </Row>
      </section>

      <CryptoChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)}
        coinName={cryptoDetails?.name}
      />

      <Row gutter={[32, 32]}>
        <CryptoStatsRow title="Market stats" stats={stats} />

        <CryptoStatsRow title="More stats info" stats={genericStats} />
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
                <h5 className="capitalize text-base">{link?.type}</h5>
                <a href={link?.url} target="_blank" rel="noreferrer">
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
