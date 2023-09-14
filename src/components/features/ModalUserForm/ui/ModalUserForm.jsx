import React, { Suspense } from 'react';
import { UserFormAsync } from '../../UserForm/ui/UserForm.async';
import { Modal } from '../../../shared/ui/Modal/Modal';

export const ModalUserForm = (props) => {
    const { isOpen, onToggleModal } = props;

    return (
        <Modal onClose={onToggleModal} isOpen={isOpen}>
            <Suspense fallback="">
                <UserFormAsync onClose={onToggleModal} />
            </Suspense>
        </Modal>
    );
};
