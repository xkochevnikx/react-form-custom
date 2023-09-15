import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
    }),
    endpoints: (builder) => ({}),
});
