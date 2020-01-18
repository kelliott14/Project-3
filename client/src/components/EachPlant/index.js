import React from "react";
import "./style.css";

function EachPlant(props) {
    return (
        <div className="card">
            <div className="card-title">{props.name}</div>
            <div className="card-subtitle">{props.nickname}</div>
            <div className="card-text">Last watered: {}</div>
            <div className="card-text">Next water: {}</div>
        </div>
    )
}

export default EachPlant;