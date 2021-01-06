import React, {Component} from "react";
import logo from "../../shares/content/Subtract.png"

export class Logo extends Component {

    render() {
        return <>
                <div className="logo">
                    <img src={logo} className="logo-pic"/>
                </div>
            </>
    }
}