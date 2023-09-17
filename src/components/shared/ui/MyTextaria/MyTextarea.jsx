import { memo } from 'react';
import cls from './MyTextarea.module.css';

export const MyTextarea = memo((props) => {
    return <textarea className={cls.MyTextarea} {...props} />;
});
