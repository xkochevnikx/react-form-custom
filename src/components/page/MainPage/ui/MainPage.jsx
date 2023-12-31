import { useCallback, useState } from 'react';
import { MyButton } from '../../../shared/ui/MyButton/MyButton';
import { ModalUserForm } from '../../../features/ModalUserForm/index';
import cls from './MainPage.module.css';

export const MainPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

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
                    isOpen={isOpenModal}
                />
            )}
        </div>
    );
};
