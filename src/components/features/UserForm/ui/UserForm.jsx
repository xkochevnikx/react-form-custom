import { useState } from 'react';
import { MyInput } from '../../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../../shared/ui/MySelect/MySelect';
import { MyTextarea } from '../../../shared/ui/MyTextaria/MyTextarea';
import { MyButton } from '../../../shared/ui/MyButton/MyButton';
import { services } from '../../../shared/lib/consts/options';
import { useInitialReducer } from '../../../shared/hooks/useInitialReducer';
import { userFormSliceReducer } from '../modal/slice/userFormSlice';
import cls from './UserForm.module.css';
import { useValue } from '../../../shared/hooks/useValue';
import { Text } from '../../../shared/ui/Text/Text';
import { usePostUsersFormMutation } from '../modal/api/usersFormApi';

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

    const handlerFormPost = async (event) => {
        event.preventDefault();
        if (!canSendForm) {
            try {
                await postFormUser({
                    name,
                    phone,
                    email,
                    service: selectedService,
                    comment,
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
            <form action="">
                <div className={cls.inputBox}>
                    {errorName && blurName ? (
                        <Text title={errorName} size={'S'} error />
                    ) : null}
                    <MyInput
                        type="text"
                        name="name"
                        placeholder="Введите Ваше имя"
                        value={name}
                        onChange={onName}
                        onBlur={onBlurName}
                        error={errorName}
                    />
                </div>
                <div className={cls.inputBox}>
                    {errorPhone && blurPhone ? (
                        <Text title={errorPhone} size={'S'} error />
                    ) : null}
                    <MyInput
                        type="tel"
                        name="phone"
                        placeholder="Введите номер телефона"
                        value={phone}
                        onChange={onPhone}
                        onBlur={onBlurPhone}
                        error={errorPhone}
                    />
                </div>
                <div className={cls.inputBox}>
                    {errorEmail && blurEmail ? (
                        <Text title={errorEmail} size={'S'} error />
                    ) : null}
                    <MyInput
                        type="email"
                        name="email"
                        placeholder="Введите вашу почту"
                        value={email}
                        onChange={onEmail}
                        onBlur={onBlurEmail}
                        error={errorEmail}
                    />
                </div>
                <MySelect
                    services={services}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                />
                <MyTextarea
                    type="text"
                    name="comment"
                    placeholder="Напишите детали"
                    value={comment}
                    onChange={onComment}
                    cols="30"
                    rows="5"
                ></MyTextarea>
                <MyButton
                    onClick={handlerFormPost}
                    type="submit"
                    disabled={canSendForm}
                >
                    Отправить
                </MyButton>
            </form>
        </div>
    );
};

export default UserForm;
