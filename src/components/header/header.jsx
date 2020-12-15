import React from "react";
import {AuthComponent} from "../../pages/AuthComponent/AuthComponent";
import {Map} from "../../pages/Map/Map";
import {Profile} from "../../pages/Profile/Profile";


export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => {this.navigateTo("login")}}>
                            Login
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {this.navigateTo("about")}}>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {this.navigateTo("profile")}}>
                            Profile
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {this.navigateTo("login")}}>
                            Log out
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}