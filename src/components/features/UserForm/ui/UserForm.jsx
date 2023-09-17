import { useCallback, useState } from 'react';
import { MyInput } from '../../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../../shared/ui/MySelect/MySelect';
import { MyTextarea } from '../../../shared/ui/MyTextaria/MyTextarea';
import { MyButton } from '../../../shared/ui/MyButton/MyButton';
import { useValue } from '../../../shared/hooks/useValue';
import { services } from '../../../shared/lib/consts/options';
// import { usePostUsersFormMutation } from '../modal/UsersFormApi';
import { userFormSliceReducer } from '../modal/userFormSlice';
import { useDispatch } from 'react-redux';
import { useInitialReducer } from '../../../shared/hooks/useInitialReducer';
import cls from './UserForm.module.css';

const UserForm = (props) => {
    console.log('монтируем');
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

    //!name
    const name = useValue({ isEmpty: 3, isName: true });
    const getName = useCallback(
        (e) => {
            name.onValue(e);
        },
        [name]
    );
    const getBlurName = useCallback(
        (e) => {
            name.onBlur(e);
        },
        [name]
    );

    //!phone
    const phone = useValue({ isPhone: true });
    const getPhone = useCallback(
        (e) => {
            phone.onValue(e);
        },
        [phone]
    );
    const getBlurPhone = useCallback(
        (e) => {
            phone.onBlur(e);
        },
        [phone]
    );

    //! email
    const email = useValue({ isEmail: true });
    const getEmail = useCallback(
        (e) => {
            email.onValue(e);
        },
        [email]
    );
    const getBlurEmail = useCallback(
        (e) => {
            email.onBlur(e);
        },
        [email]
    );

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
