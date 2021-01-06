import React from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import './loginForm.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {authenticate} from "../../actions";
import {Redirect} from "react-router-dom";


export class LoginForm extends React.Component {

    authenticate = async (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        await this.props.authenticate(email.value, password.value);
    }

    render() {
        return (
            <>
            {
                this.props.isLoggedIn ? (
                    <Redirect to="/profile" />
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

LoginForm.propTypes = {
    navigateTo: PropTypes.func,
    setForm: PropTypes.func,
}

export const LoginWithAuth = connect(
    (state) => ({
        isLoggedIn: state.auth.isLoggedIn
    }),
    { authenticate }
)(LoginForm);