import { configureStore } from "@reduxjs/toolkit";

import {cryptoAPI} from '../pages/api/cryptoApi';

export default configureStore({
  reducer: {
	  [cryptoAPI.reducerPath]: cryptoAPI.reducer,
  },
});
