import React from "react";
import { Col, Card, Row } from "antd";

const CryptoStatsRow = (props) => {
  //
  const { title, stats, description } = props;

  return (
    <Col xs={24} sm={24} lg={12} className="my-3">
      <h2 className="heading-2 side-border pb-1 text-[rgb(0,35,88)]">
        {title}
      </h2>
      <p className="text-base text-gray-600">{description}</p>
      <Card
        bordered={false}
        className="shadow-md rounded bg-white dark:bg-gray-800 my-4"
      >
        {stats.map(({ icon, title, value }, id) => (
          <Row
            key={String(id)}
            className="flex justify-between items-center break-words py-5 px-4 border-b-2 last:border-b-0 last:pb-3 hover:bg-gray-100 hover:cursor-pointer"
          >
            <span className="flex justify-between items-center font-semibold">
              {" "}
              <span className="mr-2 flex justify-center items-center text-lg">
                {" "}
                {icon}
              </span>{" "}
              {title}{" "}
            </span>
            <span className={`font-semibold text-base`}> {value} </span>
          </Row>
        ))}
      </Card>
    </Col>
  );
};

export default CryptoStatsRow;
