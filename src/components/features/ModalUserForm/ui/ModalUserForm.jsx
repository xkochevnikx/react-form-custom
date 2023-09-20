import { Suspense } from 'react';
import { Modal } from '../../../shared/ui/Modal/Modal';
import { UserForm } from '../../UserForm/index';

/**
 * @ModalUserForm
 * Компонент обёртка - возвращает модальное окно с ленивым компонентом
 * @isOpen - флаг состояния открытия модалки
 * @onToggleModal - функция закрытия окна по средствам изменения состояния флага
 *
 */

export const ModalUserForm = (props) => {
    const { isOpen, onToggleModal } = props;

    return (
        <Modal onClose={onToggleModal} isOpen={isOpen}>
            <Suspense fallback="">
                <UserForm onClose={onToggleModal} />
            </Suspense>
        </Modal>
    );
};
