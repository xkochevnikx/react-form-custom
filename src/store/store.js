import { configureStore } from '@reduxjs/toolkit';
import { formApi } from '../components/shared/api/formApi';
import { createReducerManager } from './reducerManager';

/**
 * @createReduxStore
 * функция возвращает глобальный стор
 * Редюсер менеджер предоставляет возможность подключения/отключения асинхронных редюсеров
 *
 */
const createReduxStore = () => {
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
};

export const store = createReduxStore();
