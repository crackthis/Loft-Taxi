import React from "react";
import './button.css';

export const Button = props => {
    return (
        <button className="btn" type={props.typeAttr} {...props}>
            {props.name}
        </button>
    )
}