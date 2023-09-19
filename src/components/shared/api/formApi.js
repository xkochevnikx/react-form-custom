import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * корневой api rtk который подключается к store
 */

export const formApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
    }),
    endpoints: (builder) => ({}),
});
