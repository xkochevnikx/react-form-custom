import cls from './MyInput.module.css';
import { memo } from 'react';

export const MyInput = memo((props) => {
    const { error, ...otherProps } = props;
    return (
        <input
            className={`${cls.MyInput} ${error ? cls.error : ''}`}
            {...otherProps}
        />
    );
});
