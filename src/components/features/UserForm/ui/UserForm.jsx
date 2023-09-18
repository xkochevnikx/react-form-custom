import { useCallback, useState } from 'react';
import { MyInput } from '../../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../../shared/ui/MySelect/MySelect';
import { MyTextarea } from '../../../shared/ui/MyTextaria/MyTextarea';
import { MyButton } from '../../../shared/ui/MyButton/MyButton';
import { services } from '../../../shared/lib/consts/options';
import { useInitialReducer } from '../../../shared/hooks/useInitialReducer';
import { userFormSliceReducer } from '../modal/slice/userFormSlice';
import cls from './UserForm.module.css';
import { useValue } from '../../../shared/hooks/useValue';

const UserForm = (props) => {
    const { onClose } = props;

    const [selectedService, setSelectedService] = useState(services[0]);

    useInitialReducer({
        name: 'userFormSlice',
        reducer: userFormSliceReducer,
    });

    // const [postFormUser] = usePostUsersFormMutation();

    const handlerFormPost = useCallback((event) => {
        console.log('Отправка данных на бэк');
        event.preventDefault();
    }, []);

    const [name, onName, onBlurName] = useValue({ isName: true });
    const [phone, onPhone, onBlurPhone] = useValue({ isPhone: true });
    const [email, onEmail, onBlurEmail] = useValue({ isEmail: true });
    const [comment, onComment] = useValue({ isComment: true });

    return (
        <div className={cls.wrapper}>
            <h1>React Form</h1>
            <form action="">
                <MyInput
                    type="text"
                    name="name"
                    placeholder="Введите Ваше имя"
                    value={name}
                    onChange={onName}
                    onBlur={onBlurName}
                />

                <MyInput
                    type="tel"
                    name="phone"
                    placeholder="Введите номер телефона"
                    value={phone}
                    onChange={onPhone}
                    onBlur={onBlurPhone}
                />
                <MyInput
                    type="email"
                    name="email"
                    placeholder="Введите вашу почту"
                    value={email}
                    onChange={onEmail}
                    onBlur={onBlurEmail}
                />
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
                <MyButton onClick={handlerFormPost} type="submit">
                    Отправить
                </MyButton>
            </form>
        </div>
    );
};

export default UserForm;
