import { useCallback } from 'react';
import { useValue } from '../hooks/useValue';

export const useValidationEmail = () => {
    //! email
    const email = useValue({ isEmail: true });
    const getEmail = useCallback(
        (e) => {
            email.onValue(e);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [email.onValue]
    );
    const getBlurEmail = useCallback(
        (e) => {
            email.onBlur(e);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [email.onBlur]
    );

    return {
        email,
        getEmail,
        getBlurEmail,
    };
};
