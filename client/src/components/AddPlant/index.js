import React from "react";
import "./style.css";

export function AddPlantContainer({children}) {
  return (
    <div className="addPlantContainer">{children}</div>
  )
}


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

export function Button({ type = "default", className, children, onClick, disabled }) {
    return (
      <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")} disabled={disabled}>
        {children}
      </button>
    );
  }

export function MovingButton(props) {
  return (
    <div className={props.className}>
    <div className="circle" onClick={props.onClick}>
      <div className="text">{props.text}</div>
      <img className="arrow" src={require("../../images/collapseIcon.png")} alt="arrow"></img>
    </div>
    </div>
  )
}

