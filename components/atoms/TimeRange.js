import { Select } from "antd";

 const { Option } = Select;

const TimeRange = ({ setTime, time, timeperiod}) => {
  console.log(timeperiod)

  return (
    <div className="flex justify-between items-center w-56 mt-2">
      <label htmlFor="timeperiod" className="text-lg font-semibold text-[rgb(0,35,88)]">
        {" "}
        Set time range:
      </label>
      <Select
	  id="timeperiod"
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => 
          {setTime(value)
            console.log(timeperiod)
          }}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
    </div>
  );
};

export default TimeRange;
