// import {useEffect} from "react"
import { createSlice } from "@reduxjs/toolkit";

let themeState;

themeState = createSlice({
  name: "themeState",
  initialState: {
    darkmode:
      typeof window !== "undefined" && localStorage.getItem("darkmode") === true
        ? true
        : false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkmode = !state.darkmode;
      typeof window !== "undefined" &&
        localStorage.setItem("darkmode", state.darkmode);
    },
    getTheme: (state) => {
      typeof window !== "undefined" && localStorage.getItem("darkmode") === true
        ? (state.darkmode = true)
        : (state.darkmode = false);
    },
  },
});

export const { toggleDarkMode, getTheme } = themeState.actions;

// The function below selects a value from the state.
export const darkmode = (state) => state.themeState.darkmode;

export default themeState.reducer;
