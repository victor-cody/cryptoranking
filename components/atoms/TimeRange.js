import { Select } from "antd";

 const { Option } = Select;

const TimeRange = ({ setTime, time}) => {
  return (
    <div className="flex justify-between items-center w-56 mt-2">
      <label htmlFor="timeperiod" className="text-lg font-semibold">
        {" "}
        Set time range:
      </label>
      <Select
	  id="timeperiod"
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTime(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
    </div>
  );
};

export default TimeRange;
