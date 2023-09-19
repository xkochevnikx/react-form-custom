import { memo } from 'react';
import cls from './MyButton.module.css';

export const MyButton = memo((props) => {
    const {
        type = 'button',
        disabled = false,
        children,
        white,
        ...otherProps
    } = props;
    return (
        <button
            className={`${cls.MyButton} ${white && cls.white}`}
            disabled={disabled}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
});
