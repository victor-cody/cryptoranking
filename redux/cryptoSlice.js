import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptocurrencies: [],
    searchTerm: "",
  },
  reducers: {
    setCryptocurrencies: (state, action) => {
      state.cryptocurrencies = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {setCryptocurrencies, setSearchTerm} = cryptoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCrypto = (state) => state.crypto;

export default cryptoSlice.reducer;
