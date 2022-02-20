import { configureStore } from "@reduxjs/toolkit";

import {cryptoAPI} from '../pages/api/cryptoApi';
import cryptoReducer from '../helpers/cryptoSlice';

export default configureStore({
  reducer: {
	  [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    crypto: cryptoReducer,
  },
});
