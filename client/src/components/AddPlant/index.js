import React from "react";
import "./style.css";

export function Label(props) {
    return (
        <div className="input-group input-group-lg">
          <label>{props.title}</label>
        </div>
      );

}

export function Input(props) {
    return (
        <div className="form-group">
          <input className="form-control" {...props} />
        </div>
      );
}

export function Dropdown(props) {
    return (
        <select className="form-control" id="dropDownSelecter" {...props}>
        </select>
    );
}

export function Button({ type = "default", className, children, onClick }) {
    return (
      <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
        {children}
      </button>
    );
  }


