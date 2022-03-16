import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Import the RTK Query methods from the React-specific entry point

//Headers
const cryptoHeaders = {
  "x-rapidapi-host": process.env.NEXT_PUBLIC_CRYPTOAPI_HOST_HOST,
  "x-rapidapi-key": process.env.NEXT_PUBLIC_CRYPTOAPI_HOST_KEY,
};

//base URL
const baseUrl = "https://coinranking1.p.rapidapi.com";

//
const createRequest = (url) => ({
  url,
  headers: cryptoHeaders,
  // params,
});

export const cryptoAPI = createApi({
  reducerPath: "cryptoAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    //operations and requests form rapidapi
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

// Export the auto-generated hooks for the queryes's endpoint
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoAPI;
