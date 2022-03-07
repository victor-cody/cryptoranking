import { configureStore } from "@reduxjs/toolkit";

import {cryptoAPI} from '../pages/api/cryptoApi';
import {cryptoNewsAPI} from '../pages/api/cryptoNewsApi';
// import cryptoReducer from './cryptoSlice';
import themeReducer from './themeState';
import navBarStateReducer from "./navBarState";

export default configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    [cryptoNewsAPI.reducerPath]: cryptoNewsAPI.reducer,
    // crypto: cryptoReducer,
    themeState: themeReducer,
    navBarState: navBarStateReducer,
  },
});
