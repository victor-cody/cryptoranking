import { Row } from 'antd';
import { CryptoStats } from '../components';

export default function Home() {
  return (
      <main className="w-full">
        <h2 className="text-2xl font-normal mb-2">Global Crypto Stats</h2>
        <Row gutter={[32,24]}>
          <CryptoStats title="Total Cryptocurrencies" value={"5"} />
          <CryptoStats title="Total Exchanges" value={"5"} />
          <CryptoStats title="Total Market Cap:" value={"5"} />
          <CryptoStats title="Total 24h Volume" value={"5"} />
          <CryptoStats title="Total Markets" value={"5"} />
        </Row>
      </main>
  );
}
