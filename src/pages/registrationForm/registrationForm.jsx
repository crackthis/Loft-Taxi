import React from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import './registrationForm.css';
import PropTypes from "prop-types";

export class RegistrationForm extends React.Component {

    render() {
        return <>
            <form className="form registration-form">
                <div className="title">Регистрация</div>
                <div className="inputComp">
                    <Input forWhat="email" labelName="Email*" id="email" inputWidth="355px" typeAttr="email" inputName="email" />
                </div>
                <div className="inputComp">
                    <Input forWhat="name" labelName="Как вас зовут?*" id="name" inputWidth="355px" typeAttr="name" inputName="name" />
                </div>
                <div className="inputComp">
                    <Input forWhat="password" labelName="Придумайте пароль*" id="password" inputWidth="355px" typeAttr="password" inputName="password" />
                </div>
                <div className="reg">
                    <Button name="Зарегистрироваться" typeAttr="submit" />
                </div>
                <div className="subtitle">Уже зарегестрированны? <a href="#" className="subtitle-btn" onClick={() => this.props.setForm('login')}>Войти</a></div>
            </form>
        </>
    }
}

RegistrationForm.propTypes = {
    setForm: PropTypes.func,
}