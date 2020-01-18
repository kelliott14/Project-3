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
        <div className="input-group input-group-lg">
          <input className="form-control" type="text" {...props} />
        </div>
      );
}

export function Dropdown() {
    return (<div>
        <select className="form-control" id="dropDownSelecter">
          <option>daily</option>
          <option>weekly</option>
          <option>fortnightly</option>
          <option>monthly</option>
        </select>
    </div>);
}

export function Button({ type = "default", className, children, onClick }) {
    return (
      <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
        {children}
      </button>
    );
  }


