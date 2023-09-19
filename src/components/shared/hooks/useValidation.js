import { useEffect, useMemo, useState } from 'react';

export const useValidation = (value, validations) => {
    const mapError = useMemo(() => {
        return {
            isEmail: 'Введите почту',
            isName: 'Введите имя',
            isPhone: 'Введите номер телефона',
        };
    }, []);

    const [errorArray, setErrorArray] = useState('');

    useEffect(() => {
        const NAME_REGEXP = /^[а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/;

        const PHONE_REGEXP = /((\+7|7|8)+([0-9]){10})$/;

        const EMAIL_REGEXP =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if ('isName' in validations) {
            !NAME_REGEXP.test(value.trim()) && value.length > 0
                ? setErrorArray(mapError['isName'])
                : setErrorArray((prev) => '');
        }

        if ('isPhone' in validations) {
            !PHONE_REGEXP.test(value.trim()) && value.length > 0
                ? setErrorArray(mapError['isPhone'])
                : setErrorArray((prev) => '');
        }
        if ('isEmail' in validations) {
            !EMAIL_REGEXP.test(value.trim()) && value.length > 0
                ? setErrorArray(mapError['isEmail'])
                : setErrorArray((prev) => '');
        }
    }, [value, validations, errorArray, mapError]);

    return errorArray;
};
