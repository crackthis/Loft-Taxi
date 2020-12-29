import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../actions";
import {Logo} from "loft-taxi-mui-theme/src/Logo";

export class Header extends Component {
    unauthenticate = () => {
        this.props.logOut();
    }

    render() {
        return <>
            <Logo />
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/map">
                                Map
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button onClick={this.unauthenticate}>
                                Log out
                            </button>
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