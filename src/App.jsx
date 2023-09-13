import { useValue } from './components/hooks/useValue';
import { MyInput } from './components/shared/ui/MyInput/MyInput';
import { MySelect } from './components/shared/ui/MySelect/MySelect';
import { MyTextarea } from './components/shared/ui/MyTextaria/MyTextarea';
import MyButton from './components/shared/ui/MyButton/MyButton';
import cls from './App.module.css';
import { services } from './components/shared/lib/consts/options';
import { useState } from 'react';

function App() {
    const [selectedService, setSelectedService] = useState(services[0]);

    const [comment, setComment] = useState('');

    const onComment = (e) => {
        setComment(e.target.value);
    };

    const name = useValue({ isEmpty: 3, isName: true });
    console.log(name);

    // const password = useValue({ isEmpty: 5 });
    // const email = useValue({ isEmail: true });

    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <h2>React Form</h2>
                <form action="">
                    <MyInput
                        type="text"
                        placeholder="Введите Ваше имя"
                        onChange={(e) => name.onValue(e)}
                        value={name.value}
                        onBlur={(e) => name.onBlur(e)}
                    />

                    {/* <MyInput
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
                    /> */}

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
        </div>
    );
}

export default App;
