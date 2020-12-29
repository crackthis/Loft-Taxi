import React, {Component} from "react";
import {connect} from "react-redux";
import {logOut} from "../../actions";
import {HeaderWithAuth} from "../../components/header/header";

export class Profile extends Component {

    unauthenticate = () => {
        this.props.logOut();
    }

    render() {

        return <>
            <HeaderWithAuth />
                <p>Profile</p>
            </>
    }
}

export const ProfileWithAuth = connect(
    null,
    {logOut}
)(Profile);