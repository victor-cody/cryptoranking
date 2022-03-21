import { createSlice } from "@reduxjs/toolkit";

const referenceCurrencyState = createSlice({
  name: "referenceCurrencyState",
  initialState: {
    // currencies: [],
    selectedCurrency: "USD",
  },
  reducers: {
    setReferenceCurrency: (state, payload) => {
      state.selectedCurrency = payload;
    },
  },
});

export const { setReferenceCurrency } = referenceCurrencyState.actions;

// grabs the selectedCurrency value from the global state.
export const selectedCurrency = (state) =>
  state.referenceCurrencyState.selectedCurrency;

export default referenceCurrencyState.reducer;
