import React from 'react';
import cls from './Text.module.css';

export const Text = (props) => {
    const { text, title, size, error } = props;

    const mapSizeHeaderTag = {
        S: 'h3',
        M: 'h2',
        L: 'h1',
    };
    const TitleTag = mapSizeHeaderTag[size];

    return (
        <div className={error && cls.error}>
            {text && <p>{text}</p>}
            {title && <TitleTag>{title}</TitleTag>}
        </div>
    );
};
