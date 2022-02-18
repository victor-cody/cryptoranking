import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; // Import the RTK Query methods from the React-specific entry point

//Headers
const cryptoHeaders = { 
	'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
}

//request params
const params =  {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  }

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
  endpoints: builder => ({
    //operations and requests form rapidapi	
	getCryptos : builder.query({
		query : () => createRequest('/coins')
	})

  }),
}); 


// Export the auto-generated hooks for the queryes's endpoint
export const { useGetCryptosQuery, } = cryptoAPI;
