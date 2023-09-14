import { useState } from 'react';
import { MyInput } from '../../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../../shared/ui/MySelect/MySelect';
import { MyTextarea } from '../../../shared/ui/MyTextaria/MyTextarea';
import { MyButton } from '../../../shared/ui/MyButton/MyButton';
import { useValue } from '../../../shared/hooks/useValue';
import { services } from '../../../shared/lib/consts/options';
import cls from './UserForm.module.css';

const UserForm = (props) => {
    const { onClose } = props;
    const [selectedService, setSelectedService] = useState(services[0]);

    const [comment, setComment] = useState('');

    const onComment = (e) => {
        setComment(e.target.value);
    };

    const name = useValue({ isEmpty: 3, isName: true });

    console.log(name);

    const password = useValue({ isEmpty: 5 });

    const email = useValue({ isEmail: true });
    return (
        <div className={cls.wrapper}>
            <h1>React Form</h1>
            <form action="">
                <MyInput
                    type="text"
                    placeholder="Введите Ваше имя"
                    onChange={(e) => name.onValue(e)}
                    value={name.value}
                    onBlur={(e) => name.onBlur(e)}
                />

                <MyInput
                    type="tel"
                    placeholder="Введите номер телефона"
                    value={password.value}
                    onBlur={(e) => password.onBlur(e)}
                    onChange={(e) => password.onValue(e)}
                />

                <MyInput
                    type="email"
                    placeholder="Введите вашу почту"
                    value={email.value}
                    onBlur={(e) => email.onBlur(e)}
                    onChange={(e) => email.onValue(e)}
                />

                <MySelect
                    services={services}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                />

                <MyTextarea
                    value={comment}
                    onChange={(e) => onComment(e)}
                    placeholder="Напишите детали"
                    cols="30"
                    rows="5"
                ></MyTextarea>

                <MyButton type="submit" disabled>
                    Отправить
                </MyButton>
            </form>
        </div>
    );
};

export default UserForm;
