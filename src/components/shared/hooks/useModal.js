import { useCallback, useEffect } from 'react';

/**
 * хук предоставляет дполнительный функционал модальному окну по закрытию на 'Escape'
 * @onClose - функция закрытия модалки
 * @isOpen - состояние окна
 */

export const useModal = (props) => {
    const { isOpen, onClose } = props;

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return { isOpen };
};
