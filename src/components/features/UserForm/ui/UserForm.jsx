import { useCallback, useState } from 'react';
import { MyInput } from '../../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../../shared/ui/MySelect/MySelect';
import { MyTextarea } from '../../../shared/ui/MyTextaria/MyTextarea';
import { MyButton } from '../../../shared/ui/MyButton/MyButton';
import { services } from '../../../shared/lib/consts/options';
// import { usePostUsersFormMutation } from '../modal/UsersFormApi';
import { userFormSliceReducer } from '../modal/userFormSlice';
import { useDispatch } from 'react-redux';
import { useInitialReducer } from '../../../shared/hooks/useInitialReducer';
import cls from './UserForm.module.css';
import { useValidationName } from '../../../shared/helpers/useValidationName';
import { useValidationPhone } from '../../../shared/helpers/useValidationPhone';
import { useValidationEmail } from '../../../shared/helpers/useValidationEmail';

const UserForm = (props) => {
    console.log('монтируем UserForm');
    const { onClose } = props;

    const dispatch = useDispatch();

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

    const { name, getName, getBlurName } = useValidationName();

    const { phone, getPhone, getBlurPhone } = useValidationPhone();

    const { email, getEmail, getBlurEmail } = useValidationEmail();

    return (
        <div className={cls.wrapper}>
            <h1>React Form</h1>
            <form action="">
                <MyInput
                    type="text"
                    placeholder="Введите Ваше имя"
                    value={name.value}
                    onChange={getName}
                    onBlur={getBlurName}
                />
                <MyInput
                    type="tel"
                    placeholder="Введите номер телефона"
                    value={phone.value}
                    onChange={getPhone}
                    onBlur={getBlurPhone}
                />
                <MyInput
                    type="email"
                    placeholder="Введите вашу почту"
                    value={email.value}
                    onChange={getEmail}
                    onBlur={getBlurEmail}
                />
                <MySelect
                    services={services}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                />
                <MyTextarea
                    // value={''}
                    // onChange={(e) => onComment(e)}
                    placeholder="Напишите детали"
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
