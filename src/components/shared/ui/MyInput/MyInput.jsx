import cls from './MyInput.module.css';

export function MyInput(props) {
    return <input className={cls.myInput} {...props} />;
}
