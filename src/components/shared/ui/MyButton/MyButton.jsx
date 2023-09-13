import React from 'react';
import cls from './MyButton.module.css';

const MyButton = (props) => {
    const { type = 'submit', disabled, children, ...otherProps } = props;
    return (
        <button
            className={cls.MyButton}
            disabled={disabled}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default MyButton;
