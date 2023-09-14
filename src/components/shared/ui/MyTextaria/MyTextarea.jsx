import cls from './MyTextarea.module.css';

export function MyTextarea(props) {
    return <textarea className={cls.MyTextarea} {...props} />;
}
