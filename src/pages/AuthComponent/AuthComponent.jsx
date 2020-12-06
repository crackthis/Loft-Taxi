import React from "react";
import { LoginForm } from "../../components/loginForm/loginForm";
import { HeroLogo } from "../../components/heroLogo/heroLogo";
import './AuthComponent.css';
import {RegistrationForm} from "../../components/registrationForm/registrationForm";

class AuthComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'login'
        };
    }

    setForm = (name) => {
        this.setState({ activeForm: name });
    }

    render() {
        return <>
            <div className="login">
                <HeroLogo width="33%" />
                {this.state.activeForm === 'login' && <LoginForm setForm={this.setForm} />}
                {this.state.activeForm === 'registration' && <RegistrationForm setForm={this.setForm} />}
            </div>
        </>
    }
}

export default AuthComponent;