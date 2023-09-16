import { configureStore } from '@reduxjs/toolkit';
import { formApi } from '../components/shared/api/rtkApi';
import { createReducerManager } from './reducerManager';

function createReduxStore() {
    const staticReducers = {
        [formApi.reducerPath]: formApi.reducer,
    };

    const reducerManager = createReducerManager(staticReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(formApi.middleware),
    });

    store.reducerManager = reducerManager;

    return store;
}

export const store = createReduxStore();
