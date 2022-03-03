import { createSlice } from "@reduxjs/toolkit";

const navBarState = createSlice({
  name: "navBarState",
  initialState: {
    showNavBar: false,
  },
  reducers: {
    toggleNavBar: (state) => {
      state.showNavBar = !state.showNavBar;
    },
  },
});

export const { toggleNavBar } = navBarState.actions;

// The function below selects a value from the state. 
export const showNavBar = (state) => state.navBarState.showNavBar;

export default navBarState.reducer;
