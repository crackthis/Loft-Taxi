import React from "react";
import './input.css';

export const Input = props => {
    return(
        <div className="input" style={{width: props.inputwidth}}>
            <label htmlFor={props.forwhat} className="label">{props.labelname}</label>
            <input id={props.id} type={props.typeattr} name={props.inputname} className="input-item" {...props}/>
        </div>
    )
}