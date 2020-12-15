import React from "react";
import {LoginWithAuth} from "../../components/loginForm/loginForm";
import { HeroLogo } from "../../components/heroLogo/heroLogo";
import './AuthComponent.css';
import {RegistrationForm} from "../../components/registrationForm/registrationForm";

class AuthComponent extends React.Component {

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
                {this.state.activeForm === 'login' && <LoginWithAuth setForm={this.setForm} navigateTo={this.props.navigateTo} />}
                {this.state.activeForm === 'registration' && <RegistrationForm setForm={this.setForm} />}
            </div>
        </>
    }
}

export default AuthComponent;