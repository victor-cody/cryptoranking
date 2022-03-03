import React from 'react';
import { Col, Statistic, Card } from "antd";

const CryptoStats = ({title, value}) => {
	return (
    <Col lg={8} sm={24} xs={24} className="mb-1 lg:mb-0">
      <Card
        hoverable
        className="break-words bg-white dark:bg-gray-800 shadow-md rounded transform duration-300 ease-linear delay-150"
      >
        <Statistic title={title} value={value} />
      </Card>
    </Col>
  );
};

export default CryptoStats;
