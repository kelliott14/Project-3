import React from "react";
import "./style.css";

export function EachPlantOuter({ children}) {
    return (
        <div className="card" >{children}</div>
    )
}

export function EachPlantCardInner({children}) {
    return (
        
            <div className="card-content">{children}</div>

    )
}