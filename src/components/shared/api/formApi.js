import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * @formApi
 * корневой api rtk который подключается к store, к нему с помощью функции injectEndpoints будет подключатся асинхронный endpoint по отправке данных формы на сервер
 */

export const formApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
    }),
    endpoints: (builder) => ({}),
});
