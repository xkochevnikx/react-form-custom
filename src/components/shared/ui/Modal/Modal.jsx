import cls from './Modal.module.css';
import { Portal } from '../Portal/Portal';

export const Modal = (props) => {
    const { children, onClose, isOpen } = props;

    const closeHandler = () => {
        onClose();
    };

    const onContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={isOpen && cls.ModalOpen}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
