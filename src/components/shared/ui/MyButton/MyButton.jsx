import cls from './MyButton.module.css';

export const MyButton = (props) => {
    const { type = 'submit', disabled, children, white, ...otherProps } = props;
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
};
