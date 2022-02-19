import React from 'react';
import { Col, Statistic, Card } from "antd";

const CryptoStats = ({title, value}) => {
	return (
      <Col
        span={12}
        className="mb-1 lg:mb-0"
      >
        <Card className="break-words bg-white dark:bg-gray-800 shadow-md rounded">
          <Statistic title={title} value={value} />
        </Card>
      </Col>
  );
};

export default CryptoStats;
