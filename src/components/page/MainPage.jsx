import React, { useState } from 'react';
import cls from './MainPage.module.css';
import MyButton from '../shared/ui/MyButton/MyButton';
import ModalUserForm from '../features/ModalUserForm/ui/ModalUserForm';

export const MainPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onToggleModal = () => {
        setIsOpenModal((prev) => !prev);
    };

    return (
        <div className={cls.container}>
            <header className={cls.navbar}>
                <MyButton white onClick={() => onToggleModal()}>
                    Ввести данные
                </MyButton>
            </header>
            {isOpenModal && (
                <ModalUserForm
                    onToggleModal={onToggleModal}
                    isOpenModal={isOpenModal}
                />
            )}
        </div>
    );
};
