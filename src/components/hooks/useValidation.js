import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
    const mapError = {
        isEmpty: 'Введите больше символов',
        isEmail: 'Введите почту',
        isName: 'Введите имя',
        isPhone: 'Введите номер телефона',
    };

    const [errorArray, setErrorArray] = useState('');

    const NAME_REGEXP = /^[а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/;

    const PHONE_REGEXP = /((\+7|7|8)+([0-9]){10})$/;

    const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    useEffect(() => {
        setErrorArray((prev) => value);
    }, [value]);

    return {
        errorArray,
    };
};
