import { Suspense } from 'react';
import { Modal } from '../../../shared/ui/Modal/Modal';
import { UserForm } from '../../UserForm/index';

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
