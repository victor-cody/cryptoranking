import { configureStore } from "@reduxjs/toolkit";

import {cryptoAPI} from '../pages/api/cryptoApi';
import {cryptoNewsAPI} from '../pages/api/cryptoNewsApi';
// import cryptoReducer from './cryptoSlice';

export default configureStore({
  reducer: {
	  [cryptoAPI.reducerPath]: cryptoAPI.reducer,
	  [cryptoNewsAPI.reducerPath]: cryptoNewsAPI.reducer,
    // crypto: cryptoReducer,
  },
});
