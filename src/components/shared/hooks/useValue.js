import { useState } from 'react';
import { useValidation } from './useValidation';
import { useDispatch } from 'react-redux';
import { userFormSliceActions } from '../../features/UserForm/modal/slice/userFormSlice';

export const useValue = (validations) => {
    const [blur, setBlur] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const error = useValidation(value, validations);

    const onBlur = () => {
        setBlur(true);
    };

    const onValue = (e) => {
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
    };

    const defaults = [value, onValue, onBlur, blur, error];

    return defaults;
};
