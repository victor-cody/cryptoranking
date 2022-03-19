import React, { useEffect, useState } from "react";

import millify from "millify";
import Link from "next/link";
import { Card, Row, Col, Input } from "antd";
import { RoughNotation } from "react-rough-notation";

import { GridLoadingSkeleton } from "../../components";

import { useGetCryptosQuery } from "../api/cryptoApi.js";

const Cryptocurrencies = (props) => {
  let content; // content to be displayed

  const { simplified } = props; // prop to determine the UI layout to show
  const count = simplified ? 10 : 100; //count of cryptocurrencies that should be shown first

  // fetching data
  const {
    data: cryptosList,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCryptosQuery(count);

  // filters
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
    content = (
      // <Row gutter={[24, 24]} className="">
      <GridLoadingSkeleton count={10} xs={24} sm={12} lg={6} />
      // </Row>
    );
  }

  //if the data is fetched and there is no error, show the data
  if (isSuccess && !isError) {
    content = (
      <>
        {
          //if the data is fetched and there is no error, show the data
          cryptos?.map((currency, id) => (
            <Col xs={24} sm={12} lg={6} key={String(currency.uuid)}>
              <Link href={`cryptocurrencies/${currency.uuid}`}>
                <a>
                  <Card
                    bordered={false}
                    hoverable
                    className="break-words bg-white dark:bg-gray-800 shadow-md rounded"
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      // eslint-disable-next-line
                      <img
                        className="ml-1"
                        width={40}
                        height={40}
                        alt={`${currency.name} logo`}
                        src={currency.iconUrl}
                      />
                    }
                  >
                    <div className="text-[13px]">
                      <p>Price: ${millify(currency.price)}</p>
                      <p>Market Cap: ${millify(currency.marketCap)}</p>
                      <p>
                        Daily Change:{" "}
                        <span
                          className={`${
                            currency.change.includes("-")
                              ? "text-red-500"
                              : "text-green-600"
                          }`}
                        >
                          {" "}
                          {currency.change}%{" "}
                        </span>
                      </p>
                    </div>
                  </Card>
                </a>
              </Link>
            </Col>
          ))
        }
      </>
    );
  }

  //if the data is fetched/not yet fetched and there is an error, show the error
  if ((isSuccess && isError) || (!isFetching && isError)) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {!simplified && (
        <h2 className="text-2xl font-semibold mb-4">
          All{" "}
          <RoughNotation
            type="highlight"
            color="#bf6583"
            show={true}
            animationDelay={1500}
          >
            Crypto
          </RoughNotation>
          currency
        </h2>
      )}

      {/* Search bar */}
      {!simplified && (
        <div className="pt-0 pb-5 md:pt-10 md:pb-5 mb-4 sm:w-[80%] md:w-[80%] lg:w-[50%]">
          <div className="bg-white dark:bg-gray-700 text-black dark:text-white flex items-center rounded-lg shadow-md md:shadow-xl">
            <Input
              placeholder="Search Cryptocurrencies"
              type="search"
              name="search"
              className="w-[95%] py-4 px-6 leading-tight outline-none focus:!outline-none"
              id="search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
      )}
      <Row gutter={[24, 24]}>{content}</Row>
    </div>
  );
};

export default Cryptocurrencies;
