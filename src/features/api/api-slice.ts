import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: COCKTAIL_URL,
  }),
  endpoints: (builder) => ({
    getCocktails: builder.query({
      query: (searchInitialLetter: string) =>
        `search.php?f=${searchInitialLetter}`, // only search by first letter
    }),
  }),
});

export const { useGetCocktailsQuery } = apiSlice;
