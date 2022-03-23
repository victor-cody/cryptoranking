import { Select } from "antd";

const { Option } = Select;

import { useDispatch, useSelector } from "react-redux";
import { useGetReferenceCurrenciesQuery } from "../../pages/api/cryptoApi";
import {
  setReferenceCurrency,
  selectedCurrency,
} from "../../redux/referenceCurrencyState";

const CurrencyRange = () => {
  const { data } = useGetReferenceCurrenciesQuery();
  const dispatch = useDispatch();
  const selectedCur = useSelector(selectedCurrency);

  return (
    <div className="flex justify-center items-center w-56 mr-2 text-white">
      <Select
        id="reference currency"
        defaultValue={"selectedCur"}
        className="select-timeperiod"
        onChange={(value) => {
          dispatch(setReferenceCurrency(value));
          console.log(selectedCur);
        }}
      >
        {data?.data?.currencies.map((currency) => (
          <Option key={currency?.name}>{currency?.name}</Option>
        ))}
      </Select>
    </div>
  );
};

export default CurrencyRange;
