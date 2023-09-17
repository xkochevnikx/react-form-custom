import { useCallback, useState } from 'react';
import { useValidation } from './useValidation';

export const useValue = (validations) => {
    const [blur, setBlur] = useState(false);
    const [value, setValue] = useState('');

    const validation = useValidation(value, validations);

    const onBlur = useCallback(() => {
        setBlur(true);
    }, [setBlur]);

    const onValue = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        [setValue]
    );

    return {
        blur,
        value,
        onValue,
        onBlur,
        ...validation,
    };
};
