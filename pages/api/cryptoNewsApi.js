import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Import the RTK Query methods from the React-specific entry point

//Headers
const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": process.env.NEXT_PUBLIC_NEWSAPI_HOST,
  "x-rapidapi-key": process.env.NEXT_PUBLIC_NEWSAPI_KEY,
};

//base URL  
const baseUrl = "https://bing-news-search1.p.rapidapi.com";

//
const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders,
});

export const cryptoNewsAPI = createApi({
  reducerPath: "cryptoNewsAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    //operations and requests form rapidapi
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
}); 


// Export the auto-generated hooks for the queryes's endpoint
export const { useGetCryptoNewsQuery, } = cryptoNewsAPI;
