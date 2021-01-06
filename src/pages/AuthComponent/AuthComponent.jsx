import React, { Component } from "react";
import {LoginWithAuth} from "../loginForm/loginForm";
import {RegWithAuth} from "../registrationForm/registrationForm";
import { HeroLogo } from "../../components/heroLogo/heroLogo";
import './AuthComponent.css';
import {connect} from "react-redux";


export class AuthComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'login',
        };
    }

    setForm = (name) => {
        this.setState({ activeForm: name });
    }


    render() {
        return <>
            <div className="login">
                <HeroLogo width="33%" />
                {this.state.activeForm === 'login' && <LoginWithAuth setForm={this.setForm} />}
                {this.state.activeForm === 'registration' && <RegWithAuth setForm={this.setForm} />}
            </div>
        </>
    }
}

export const AuthComponentWithAuth = connect()(AuthComponent)