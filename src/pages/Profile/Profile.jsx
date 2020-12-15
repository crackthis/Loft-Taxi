import React, {Component} from "react";
import {withAuth} from "../../AuthContext";

export class Profile extends Component {

    unauthenticate = () => {
        this.props.logOut();
        this.props.navigateTo("login");
    }

    render() {

        return <p>Profile <button onClick={this.unauthenticate}>Log out</button></p>
    }
}

export const ProfileWithAuth = withAuth(Profile);