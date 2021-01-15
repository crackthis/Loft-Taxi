import React from "react";
import './button.css';
import classNames from "classnames";

export const Button = props => {
    return (
        <button className={classNames("btn", {disabled: props.disabled})} {...props}>
            {props.name}
        </button>
    )
}