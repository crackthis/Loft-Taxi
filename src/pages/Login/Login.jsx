import React from "react";
import { LoginForm } from "../../components/loginForm/loginForm";
import { HeroLogo } from "../../components/heroLogo/heroLogo";
import './Login.css';

export const Login = () => {
    return (
        <div className="login">
            <HeroLogo maxWidth="33%" />
            <LoginForm />
        </div>
    )
}