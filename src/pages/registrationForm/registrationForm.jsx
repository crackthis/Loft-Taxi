import React from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import {connect} from 'react-redux';
import './registrationForm.css';
import PropTypes from "prop-types";
import {signUp} from "../../actions";
import {Redirect} from "react-router-dom";

export class RegistrationForm extends React.Component {

    signUp = async (event) => {
        event.preventDefault();
        const { email, password, name, surname } = event.target;
        this.props.signUp(email.value, password.value, name.value, surname.value);
    }

    render() {
        return <>
            {
                this.props.success ? (
                    <Redirect to="/" />
                ) : (
                    <form className="form registration-form" onSubmit={this.signUp}>
                        <div className="title">Регистрация</div>
                        <div className="inputComp">
                            <Input forwhat="email" labelname="Email*" id="email" inputwidth="355px" typeattr="email" inputname="email" />
                        </div>
                        <div className="inputComp">
                            <Input forwhat="name" labelname="Имя*" id="name" inputwidth="355px" typeattr="name" inputname="name" />
                        </div>
                        <div className="inputComp">
                            <Input forwhat="surname" labelname="Фамилия*" id="surname" inputwidth="355px" typeattr="surname" inputname="surname" />
                        </div>
                        <div className="inputComp">
                            <Input forwhat="password" labelname="Придумайте пароль*" id="password" inputwidth="355px" typeattr="password" inputname="password" />
                        </div>
                        <div className="reg">
                            <Button name="Зарегистрироваться" typeAttr="submit" />
                        </div>
                        <div className="subtitle">Уже зарегестрированны? <a href="#" className="subtitle-btn" onClick={() => this.props.setForm('login')}>Войти</a></div>
                    </form>
                )
            }
        </>
    }
}

RegistrationForm.propTypes = {
    setForm: PropTypes.func,
}

export const RegWithAuth = connect(
    null,
    { signUp }
)(RegistrationForm)