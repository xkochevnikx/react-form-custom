# react-form-custom

Проект "ленивой" формы сделан что бы показать как можно отложенно подгружать те компоненты и их логику которые не являются критичными при первой отрисовке и которые не обязательно тащить в главный бандл. Так же показан пример работы с асинхронными редюсерами и различными кастомными хуками валидации полей формы. 

-   В коде функций есть комментарии JSDoc.

---
### Технологии и библиотеки

-   React
-   Webpack
-   Eslint
-   Babel
-   Redux toolkit/rtk query
-   Json server
-   headless ui

---
### Сборка и настройка среды 

В качетсве сборщика используется Webpack 5 в котором для транспиляции JS используется Babel. Для обработки стилей используется MiniCssExtractPlugin.loader и postcss-loader.

---
### Линтинг и прекоммит хуки

В прекоммит хуках за качетством кода следит eslint с установкой дополнительно plugin-react-hooks. 

---
### Работа с данными
Взаимодействие с данными осуществляется с помощью redux toolkit и rtk query. 
Для асинхронного подключения редюсерa используется хук useInitialReducer.

---
## Запуск проекта

Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org) v8+.

```
npm install - устанавливаем зависимости
npm run start -  запуск frontend проекта в dev режиме
json-server --watch db.json - запуск сервера
npm run build - сборка в prod режиме
npm run lint - проверка js файлов линтером

```

---
### Демонтсрация интерфейса

| <img src="https://github.com/xkochevnikx/react-form-custom/blob/master/demonstrationImage/demonstration_1.png" width="400"/> | <img src="https://github.com/xkochevnikx/react-form-custom/blob/master/demonstrationImage/demonstration_2.png" width="400"/> |

<br/>

| <img src="https://github.com/xkochevnikx/react-form-custom/blob/master/demonstrationImage/demonstration_3.png" width="400"/> |


---
## Команда проекта

-   [Святослав Деев](https://github.com/xkochevnikx) — Front-End Engineer
