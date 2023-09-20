import { useEffect, useMemo, useState } from 'react';

/**
 * @useValidation - хук валидации
 * @value - строка из инпута
 * @validation - объект принимаемый на вход. По ключу в котором, проверка идёт по одной из регулярок
 * @mapError - мапер ошибок
 * @error - возвращаемое хуком наружу состояние с ошибкой
 */

export const useValidation = (value, validations) => {
    const mapError = useMemo(() => {
        return {
            isEmail: 'Введите почту',
            isName: 'Введите имя',
            isPhone: 'Введите номер телефона',
        };
    }, []);

    const [error, setError] = useState('');

    useEffect(() => {
        const NAME_REGEXP = /^[а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/;

        const PHONE_REGEXP = /((\+7|7|8)+([0-9]){10})$/;

        const EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}$/;

        if ('isName' in validations) {
            !NAME_REGEXP.test(value.trim()) && value.length > 0
                ? setError(mapError['isName'])
                : setError((prev) => '');
        }

        if ('isPhone' in validations) {
            !PHONE_REGEXP.test(value.trim()) && value.length > 0
                ? setError(mapError['isPhone'])
                : setError((prev) => '');
        }
        if ('isEmail' in validations) {
            !EMAIL_REGEXP.test(value) && value.length > 0
                ? setError(mapError['isEmail'])
                : setError((prev) => '');
        }
    }, [value, validations, error, mapError]);

    return error;
};
