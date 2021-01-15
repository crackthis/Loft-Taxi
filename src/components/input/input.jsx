import React from "react";
import './input.css';
import { Input } from "@material-ui/core";

export const InputElem = props => {
    return(
        <div className="input" style={{width: props.inputwidth}}>
            <label htmlFor={props.forwhat} className="label">{props.labelname}</label>
            <Input
                id={props.id}
                type={props.typeattr}
                name={props.inputname}
                {...props}
            />
        </div>
    )
}