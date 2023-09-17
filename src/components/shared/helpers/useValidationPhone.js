import { useCallback } from 'react';
import { useValue } from '../hooks/useValue';

export const useValidationPhone = () => {
    //!phone
    const phone = useValue({ isPhone: true });
    const getPhone = useCallback(
        (e) => {
            phone.onValue(e);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [phone.onValue]
    );
    const getBlurPhone = useCallback(
        (e) => {
            phone.onBlur(e);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [phone.onBlur]
    );

    return {
        phone,
        getPhone,
        getBlurPhone,
    };
};
