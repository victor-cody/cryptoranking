import React, { useEffect, useState } from "react";
import millify from "millify";
import Link  from "next/link";
import { Card, Row, Col, Input } from "antd";

import { GridLoadingSkeleton } from "../index.js";

import { useGetCryptosQuery } from "../../pages/api/cryptoApi.js";

const Cryptocurrencies = (props) => {
	// passing the simplified prop to determine the number of cryptocurrencies to show
	const {simplified} = props;
	const count = simplified ? 10 : 100;

	const {data: cryptoList, isFetching, isSuccess, isError, error} = useGetCryptosQuery(count);

	//getting they coins from coinranking api and storing it in a state varable
	const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

	let content;

  //if the data is not yet fetched, show a loading indicator
  if (isFetching) {
    content = <GridLoadingSkeleton count={4} xs={24} sm={12} lg={6} />;
  }
  //if the data is fetched and there is no error, show the data
  if (isSuccess && !isError) {
    content = cryptos?.map((currency) => (
      <Col xs={24} sm={12} lg={6} key={currency.id}>
        <Link href={`crypto/${currency.id}`}>
          <a>
            <Card
              bordered={false}
              hoverable
              className="break-words bg-white dark:bg-gray-800 shadow-md rounded"
              title={`${currency.rank}. ${currency.name}`}
              extra={
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
    ));
  }
  //if the data is fetched/not yet fetched and there is an error, show the error
  if ((isSuccess && isError) || (!isFetching && isError)) {
    content = <div>{error}</div>;
  }

  return (
    <>
      <Row gutter={[24, 24]} className="min-h-[65vh]">
        
		{content}
        
      </Row>
    </>
  );
};

export default Cryptocurrencies;
