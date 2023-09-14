import { useState } from 'react';
import { useValidation } from './useValidation';

export const useValue = (validations) => {
    const [blur, setBlur] = useState(false);
    const [value, setValue] = useState('');

    const validation = useValidation(value, validations);

    const onBlur = () => {
        setBlur(true);
    };

    const onValue = (e) => {
        setValue(e.target.value);
    };

    return {
        blur,
        value,
        onValue,
        onBlur,
        ...validation,
    };
};
