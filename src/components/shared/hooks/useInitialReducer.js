import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

/**
 * @useInitialReducer -  хук содержит логику по покдлючению асинхронного редюсера в момент монтирвания ленивого компонета с помощью rtc reducerManager
 * @name - название редюсера
 * @reducer - сам редюсер
 */

export const useInitialReducer = (props) => {
    const { name, reducer } = props;
    const dispatch = useDispatch();

    const store = useStore();

    useEffect(() => {
        store.reducerManager.add(`${name}`, reducer);
        dispatch({ type: `@INIT ${name}Reducer` });
        return () => {
            store.reducerManager.remove(`${name}`);
            dispatch({ type: `@REMOVE ${name}Reducer` });
        };
    }, [store, dispatch, reducer, name]);
};
