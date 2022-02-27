import React from 'react';
import { Col, Card, Row } from "antd";

const CryptoStatsRow = (props) => {
	//
	const {title, stats} = props;

	return (
    <Col xs={24} sm={24} lg={12} className="my-3">
      <h2 className="heading-2 side-border">{title}</h2>
      <Card
        bordered={false}
        className="shadow-md rounded bg-white dark:bg-gray-800 my-4"
      >
        {stats.map(({ icon, title, value }, id) => (
          <Row
            key={String(id)}
            className="flex justify-around items-center break-words py-5 px-4 border-b-2 last:border-b-0 last:pb-3 hover:bg-gray-100 hover:pointer-cursor"
          >
            <span className="flex justify-between items-center font-semibold">
              {" "}
              <span className="mr-2 flex justify-center items-center text-lg">
                {" "}
                {icon}
              </span>{" "}
              {title}{" "}
            </span>
            <span className={`text-lg font-light`}> {value} </span>
          </Row>
        ))}
      </Card>
    </Col>
  );
};

export default CryptoStatsRow;
