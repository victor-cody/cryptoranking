import { Col, Row, Card } from "antd";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

//moment
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  // coinHistory?.data?.history?.map((price) => {
  // 	coinPrice.push(price?.price);
  // 	coinTimeStamp.push(new Date(price?.timestamp).toLocaleDateString());
  // });

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    // coinTimeStamp.push(
    //   new Date(
    //     coinHistory?.data?.history[i]?.timestamp * 1000
    //   ).toLocaleDateString()
    // );
    coinTimeStamp.push(
      moment
        .unix(coinHistory?.data?.history[i]?.timestamp)
        ?.format("DD|MM|YYYY")
    );
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // responsive: true,
  //   title: {
  //     display: true,
  //     text: coinName,
  //   }
  // };

  return (
    <>
      <Col span={24}>
        <Card className="break-words bg-white dark:bg-gray-800 shadow-md rounded my-4">
          <Row gutter={[32, 32]} className="pb-2 border-b-2">
            <div className="w-full flex justify-between items-center px-2 py-3">
              <h3 className="lg:text-xl sm:text-lg sm:font-semibold text-[rgb(0,35,88)]">
                Change:{" "}
                <span
                  className={`${
                    coinHistory?.data?.change?.includes("-")
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {coinHistory?.data?.change}%
                </span>{" "}
              </h3>
              <h3 className="lg:text-xl sm:text-lg sm:font-semibold text-[rgb(0,35,88)]">
                Current {coinName} Price: $ {currentPrice}
              </h3>
            </div>
          </Row>
          <Line data={data} options={options} />
        </Card>
      </Col>
    </>
  );
};

export default CryptoChart;
