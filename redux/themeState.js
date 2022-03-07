// import { createSlice } from "@reduxjs/toolkit";

// let themeState;

// if (typeof window !== undefined) {
// 	themeState = createSlice({
//   name: "themeState",
//   initialState: {
//     darkmode: localStorage.getItem("darkmode") === true ? true : false,
//   },
//   reducers: {
//     toggleDarkMode: (state) => {
//       state.darkmode = !state.darkmode;
// 	  localStorage.setItem("darkmode", state.darkmode);
//     },
// 	getTheme: (state) => {
// 		localStorage.getItem("darkmode") === true ? state.darkmode = true : state.darkmode = false;
// 	}
//   },
// });
// }

// export const { toggleDarkMode, getTheme } = themeState.actions;

// // The function below selects a value from the state.
// export const darkmode = (state) => state.themeState.darkmode;

// export default themeState.reducer;
