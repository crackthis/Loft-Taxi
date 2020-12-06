import React from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import './loginForm.css';

export class LoginForm extends React.Component {

    render() {
        return <>
            <form className="loginForm">
                <div className="title">Войти</div>
                <div className="inputComp">
                    <Input forWhat="email" labelName="Email" id="email" inputWidth="355px" typeAttr="email" inputName="email" />
                </div>
                <div className="inputComp">
                    <Input forWhat="password" labelName="Пароль" id="password" inputWidth="355px" typeAttr="password" inputName="password" />
                </div>
                <div className="restore">
                    <a href="#" className="restore-btn">Забыли пароль?</a>
                </div>
                <div className="enter-btn">
                    <Button name="Войти" typeAttr="submit" />
                </div>
                <div className="registration">Новый пользователь? <a href="#" className="registration-btn">Регистрация</a></div>
            </form>
        </>
    }
}