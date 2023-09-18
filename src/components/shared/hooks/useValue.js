import { useCallback, useMemo, useState } from 'react';
import { useValidation } from './useValidation';
import { useDispatch } from 'react-redux';
import { userFormSliceActions } from '../../features/UserForm/modal/slice/userFormSlice';

export const useValue = (validations) => {
    const [blur, setBlur] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const validation = useValidation(value, validations);

    const onBlur = useCallback(() => {
        setBlur(true);
    }, []);

    const onValue = useCallback(
        (e) => {
            setValue(e.target.value);

            if ('isName' in validations) {
                dispatch(userFormSliceActions.setName(e.target.value));
            }
            if ('isPhone' in validations) {
                dispatch(userFormSliceActions.setPhone(e.target.value));
            }
            if ('isEmail' in validations) {
                dispatch(userFormSliceActions.setEmail(e.target.value));
            }
            if ('isComment' in validations) {
                dispatch(userFormSliceActions.setComment(e.target.value));
            }
        },
        [validations, dispatch]
    );

    const defaults = useMemo(() => {
        return [value, onValue, onBlur, blur];
    }, [value, onValue, onBlur, blur]);

    return defaults;
};
