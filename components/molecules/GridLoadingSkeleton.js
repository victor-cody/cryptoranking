import { Col, Card } from "antd";

const GridLoadingSkeleton = ( props) => {
	const {count, xs, sm, lg} = props;
	const elements = new Array(count).fill(0);
  return (
    <>
      {elements.map((element, index) => (
        <Col key={index} xs={xs} sm={sm} lg={lg}>
          <Card
            loading
            className="break-words bg-white dark:bg-gray-800 shadow-md rounded"
          ></Card>
        </Col>
      ))}
    </>
  );
};

export default GridLoadingSkeleton;
