import React, { useEffect, useState } from "react";

import millify from "millify";
import Link from "next/link";
import { Card, Row, Col, Input } from "antd";
import { RoughNotation } from "react-rough-notation";

import { GridLoadingSkeleton } from "../../components";

import { useGetCryptosQuery } from "../api/cryptoApi.js";

const Cryptocurrencies = (props) => {
  // passing the simplified prop to determine the number of cryptocurrencies to show
  const { simplified } = props;
  const count = simplified ? 10 : 100;

  const {
    data: cryptosList,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCryptosQuery(count);

  //getting they coins from coinranking api and storing it in a state varable
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  //if the data is not yet fetched, show a loading indicator
  if (isFetching) {
    return (
      <Row gutter={[24, 24]} className="">
        <GridLoadingSkeleton count={4} xs={24} sm={12} lg={6} />
      </Row>
    );
  }

  //if the data is fetched/not yet fetched and there is an error, show the error
  if ((isSuccess && isError) || (!isFetching && isError)) {
    return <div>{error}</div>;
  }

  return (
    <div className={`${simplified ? "" : "mt-[300rem]"}`}>
      {!simplified && (
        <RoughNotation
          customElement="h2"
          type="highlight"
          color="#fff176"
          className="text-2xl font-semibold mb-5"
        >
          Cryptocurrencies
        </RoughNotation>
      )}

      {/* Search bar */}
      {!simplified && (
        <div className="pt-0 pb-5 md:pt-10 md:pb-5 mx-4 w-[50%]">
          <div className="bg-white dark:bg-gray-700 text-black dark:text-white flex items-center rounded-lg shadow-md md:shadow-xl">
            <input
              placeholder="Search"
              type="search"
              name="search"
              className="w-[80%] rounded-l-full py-4 px-6 leading-tight focus:outline-none"
              id="search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div className="p-2 md:p-4">
              <button className="rounded-full focus:outline-none w-10 h-12 md:w-10 md:h-12 flex items-center justify-center"></button>
            </div>
          </div>
        </div>
      )}
      <Row gutter={[24, 24]}>
        {
          //if the data is fetched and there is no error, show the data

          cryptos?.map((currency, id) => (
            <Col xs={24} sm={12} lg={6} key={String(id)}>
              <Link href={`crypto/${currency.id}`}>
                <a>
                  <Card
                    bordered={false}
                    hoverable
                    className="break-words bg-white dark:bg-gray-800 shadow-md rounded"
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      // eslint-disable-next-line
                      <img
                        className="w-10"
                        alt={`${currency.name} logo`}
                        src={currency.iconUrl}
                      />
                    }
                  >
                    <div className="text-[13px] font-bold">
                      <p>Price: {millify(currency.price)}</p>
                      <p>Market Cap: {millify(currency.marketCap)}</p>
                      <p>Daily Change: {currency.change}%</p>
                    </div>
                  </Card>
                </a>
              </Link>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
