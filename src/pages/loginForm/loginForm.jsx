import React, { Component } from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import './loginForm.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {authenticate} from "../../actions";
import {Redirect} from "react-router-dom";


export class LoginForm extends Component {

    async componentDidMount() {
        if(localStorage.email && localStorage.password) {
            await this.props.authenticate(localStorage.email, localStorage.password);
        }
    }

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
                    <form className="form" onSubmit={this.authenticate} >
                        <div className="title">Войти</div>
                        <div className="inputComp">
                            <Input forwhat="email" labelname="Email" id="email" inputwidth="355px" typeattr="email" inputname="email" />
                        </div>
                        <div className="inputComp">
                            <Input forwhat="password" labelname="Пароль" id="password" inputwidth="355px" typeattr="password" inputname="password" />
                        </div>
                        <div className="restore">
                            <a href="#" className="restore-btn">Забыли пароль?</a>
                        </div>
                        <div className="enter">
                            <Button name="Войти" typeattr="submit" />
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