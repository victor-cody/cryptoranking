import React from 'react';
import { Col, Card, Row } from "antd";

const CryptoStatsRow = (props) => {
	//
	const {title, stats} = props;

	return (
    <Col xs={24} sm={24} lg={12} className="my-3">
      <Card
        bordered={false}
        className="shadow-md rounded bg-white dark:bg-gray-800 my-4"
      >
        <h2 className="heading-2 side-border pb-2 border-b-2 border-gray-300">{title}</h2>

        {stats.map(({ icon, title, value }, id) => (
          <Row
            key={String(id)}
            className="flex justify-around items-center break-words py-5 px-4 border-b-2 last:border-b-0 last:pb-3 hover:bg-gray-100 hover:cursor-pointer"
          >
            <span className="flex justify-between items-center font-semibold">
              {" "}
              <span className="mr-2 flex justify-center items-center text-lg">
                {" "}
                {icon}
              </span>{" "}
              {title}{" "}
            </span>
            <span className={`text-lg`}> {value} </span>
          </Row>
        ))}
      </Card>
    </Col>
  );
};

export default CryptoStatsRow;
