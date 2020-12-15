import React from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import './loginForm.css';
import {withAuth} from "../../AuthContext";

export class LoginForm extends React.Component {
    goToProfile = () => {
        this.props.navigateTo("profile");
    }

    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.logIn(email.value, password.value)
    }

    render() {
        return (
            <>
            {
                this.props.isLoggedIn ? (
                    <p>
                        You are logged in <button onClick={() => this.props.navigateTo("profile")}>Go To Profile</button>
                    </p>
                ) : (
                    <form className="form" onSubmit={this.authenticate}>
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
                        <div className="enter">
                            <Button name="Войти" typeAttr="submit" />
                        </div>
                        <div className="subtitle">Новый пользователь? <a href="#" onClick={() => this.props.setForm('registration')} className="subtitle-btn">Регистрация</a></div>
                    </form>
                )
            }

            </>
        );
    }
}

export const LoginWithAuth = withAuth(LoginForm)