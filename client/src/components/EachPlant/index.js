import React from "react";
import "./style.css";

function EachPlant(props) {
    return (
        <div className="card">
            <div className="card-title">{props.name}</div>
            <div className="card-subtitle">{props.nickname}</div>
            <div className="card-text">Last watered: {props.lastWatered}</div>
            <div className="card-text">Next water: {props.nextWater}</div>
        </div>
    )
}

export default EachPlant;