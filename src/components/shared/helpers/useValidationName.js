import { useCallback } from 'react';
import { useValue } from '../hooks/useValue';

export const useValidationName = () => {
    //!name
    const name = useValue({ isEmpty: 3, isName: true });
    const getName = useCallback(
        (e) => {
            name.onValue(e);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [name.onValue]
    );
    const getBlurName = useCallback(
        (e) => {
            name.onBlur(e);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [name.onBlur]
    );

    return {
        name,
        getName,
        getBlurName,
    };
};
