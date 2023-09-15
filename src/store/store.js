import { configureStore } from '@reduxjs/toolkit';
import { formApi } from '../components/shared/api/rtkApi';

export const store = configureStore({
    reducer: {
        [formApi.reducerPath]: formApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(formApi.middleware),
});
