import React from "react";
import './input.css';

export const Input = props => {
    return(
        <div className="input" style={{width: props.inputWidth}}>
            <label htmlFor={props.forWhat} className="label">{props.labelName}</label>
            <input id={props.id} type={props.typeAttr} name={props.inputName} className="input-item" {...props}/>
        </div>
    )
}