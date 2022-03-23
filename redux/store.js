import { configureStore } from "@reduxjs/toolkit";

import { cryptoAPI } from "../pages/api/cryptoApi";
import { cryptoNewsAPI } from "../pages/api/cryptoNewsApi";
// import cryptoReducer from './cryptoSlice';
import themeReducer from "./themeState";
import navBarStateReducer from "./navBarState";
import referenceCurrencyReducer from "./referenceCurrencyState";

export default configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    [cryptoNewsAPI.reducerPath]: cryptoNewsAPI.reducer,
    // crypto: cryptoReducer,
    themeState: themeReducer,
    navBarState: navBarStateReducer,
    referenceCurrencyState: referenceCurrencyReducer,
  },
  // Adding apis to middleware to enabls caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoAPI.middleware,
      cryptoNewsAPI.middleware
    ),
});
