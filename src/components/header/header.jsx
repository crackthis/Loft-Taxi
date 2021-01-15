import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../actions";
import {Logo} from "../Logo/Logo";
import "./header.css";

export class Header extends Component {
    unauthenticate = (e) => {
        e.preventDefault();
        this.props.logOut();
    }

    render() {
        return <>
            <header className="header">
                <nav>
                    <Link to="/profile" className="logo-link">
                        <Logo />
                    </Link>
                    <ul className="header-list">
                        <li>
                            <Link className="header-item" to="/map">
                                Карта
                            </Link>
                        </li>
                        <li>
                            <Link className="header-item" to="/profile">
                                Профиль
                            </Link>
                        </li>
                        <li>
                            <a className="header-item" onClick={this.unauthenticate}>
                                Выйти
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            </>
    }
}

export const HeaderWithAuth = connect(
    null,
    {logOut}
)(Header);