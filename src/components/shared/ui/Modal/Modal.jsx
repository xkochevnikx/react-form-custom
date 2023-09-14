import cls from './Modal.module.css';
import { Portal } from '../Portal/Portal';

export const Modal = (props) => {
    const { children, onClose, isOpen } = props;

    return <Portal>{children}</Portal>;
};
