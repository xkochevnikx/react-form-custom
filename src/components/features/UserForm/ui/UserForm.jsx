import { useState } from 'react';
import { services } from '../../../shared/lib/consts/options';
import { useInitialReducer } from '../../../shared/hooks/useInitialReducer';
import { userFormSliceReducer } from '../modal/slice/userFormSlice';
import { useValue } from '../../../shared/hooks/useValue';
import { Text } from '../../../shared/ui/Text/Text';
import { usePostUsersFormMutation } from '../modal/api/usersFormApi';
import { useStore } from 'react-redux';
import { Form } from '../../../entities/Form/Form';
import cls from './UserForm.module.css';

/**
 * Асинхронная фича @UserForm
 * @onClose - функция закрытия модалки
 */

const UserForm = (props) => {
    const { onClose } = props;

    const [selectedService, setSelectedService] = useState(services[0]);

    useInitialReducer({
        name: 'userFormSlice',
        reducer: userFormSliceReducer,
    });

    const [name, onName, onBlurName, blurName, errorName] = useValue({
        isName: true,
    });
    const [phone, onPhone, onBlurPhone, blurPhone, errorPhone] = useValue({
        isPhone: true,
    });
    const [email, onEmail, onBlurEmail, blurEmail, errorEmail] = useValue({
        isEmail: true,
    });

    const [comment, onComment] = useValue({ isComment: true });

    const canSendForm = !!(errorName || errorPhone || errorEmail);

    const [postFormUser] = usePostUsersFormMutation();

    const store = useStore().getState().userFormSlice;

    const handlerFormPost = async (event) => {
        event.preventDefault();
        if (!canSendForm) {
            try {
                await postFormUser({
                    name: store.name,
                    phone: store.phone,
                    email: store.email,
                    service: selectedService,
                    comment: store.comment,
                });
                onClose();
            } catch (e) {
                console.log(e);
            }
        }
    };
    return (
        <div className={cls.wrapper}>
            <Text title={'React Form'} size={'L'} />
            <Form
                name={name}
                onName={onName}
                onBlurName={onBlurName}
                errorName={errorName}
                blurName={blurName}
                phone={phone}
                onPhone={onPhone}
                onBlurPhone={onBlurPhone}
                blurPhone={blurPhone}
                errorPhone={errorPhone}
                email={email}
                onEmail={onEmail}
                onBlurEmail={onBlurEmail}
                blurEmail={blurEmail}
                errorEmail={errorEmail}
                comment={comment}
                onComment={onComment}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
                canSendForm={canSendForm}
                handlerFormPost={handlerFormPost}
            />
        </div>
    );
};

export default UserForm;
