import React from "react";
import "./style.css";

export function Label(props) {
    return <div>
        <label {...props}></label>
    </div>

}

export function Input({ fluid, children }) {
    return <div>
        <input></input>
    </div>
}

export function Dropdown({ fluid, children }) {
    return <div></div>
}
