import React from "react";
import "./style.css";

export function EachPlantOuter({ children}) {
    return (
        <div className="card eachPlantCard" >{children}</div>
    )
}

export function EachPlantCardInner({children}) {
    return (
        
            <div className="card-content">{children}</div>

    )
}

export function PlantsContainer({children}) {
    return (
      <div className="plantsContainer">{children}</div>
    )
  }