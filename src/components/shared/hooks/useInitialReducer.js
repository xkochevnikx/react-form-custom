import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

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
