import cls from './MyButton.module.css';

export const MyButton = (props) => {
    const { type = 'submit', disabled, children, white, ...otherProps } = props;
    return (
        <button
            className={white ? cls.white : cls.MyButton}
            disabled={disabled}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};
