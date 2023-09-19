import React from 'react';
import { MyInput } from '../../shared/ui/MyInput/MyInput';
import { Text } from '../../shared/ui/Text/Text';
import { MySelect } from '../../shared/ui/MySelect/MySelect';
import { MyTextarea } from '../../shared/ui/MyTextaria/MyTextarea';
import { MyButton } from '../../shared/ui/MyButton/MyButton';
import { services } from '../../shared/lib/consts/options';
import cls from './Form.module.css';

export const Form = (props) => {
    const {
        name,
        onName,
        onBlurName,
        errorName,
        blurName,
        phone,
        onPhone,
        onBlurPhone,
        blurPhone,
        errorPhone,
        email,
        onEmail,
        onBlurEmail,
        blurEmail,
        errorEmail,
        comment,
        onComment,
        selectedService,
        setSelectedService,
        canSendForm,
        handlerFormPost,
    } = props;
    return (
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
    );
};
