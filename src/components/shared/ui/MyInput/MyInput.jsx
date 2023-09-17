import cls from './MyInput.module.css';
import { memo } from 'react';

export const MyInput = memo((props) => {
    return <input className={cls.MyInput} {...props} />;
});
