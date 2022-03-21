import { Select } from "antd";

 const { Option } = Select;

const CurrencyRange = () => {
	return (
    <div className="flex justify-center items-center w-56 mr-2">
      <Select
        id="reference currency"
        defaultValue="7d"
        className="select-timeperiod"
        onChange={(value) => {
          setTime(value);
          console.log(timeperiod);
        }}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
    </div>
  );
};

export default CurrencyRange;
