import cls from './MyInput.module.css';
import { memo } from 'react';

export const MyInput = memo((props) => {
    const { error, ...otherProps } = props;
    return (
        <input
            autoComplete="off"
            className={`${cls.MyInput} ${error ? cls.error : ''}`}
            {...otherProps}
        />
    );
});
