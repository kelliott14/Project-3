import React from "react";
import "./style.css";

export function ProfileDetails(props) {
    return (
        <div className="card profileCard">
            <div className="ohHello">oh, hello <span className="profileName">{props.username}</span>, welcome back!</div>
            
        </div>
    )
}




export function Info() {
    return (
            <div className="card infoCard">
                <div> <img className="imgthumbnail" src={require("../../images/watered.png")} alt="wateredTD"></img>
                    <p> = all watered up</p>
                </div>
                <div> <img src={require("../../images/midWater.png")} alt="wateredTD"></img>
                    <p> = in between waters</p>
                </div>
                <div> <img src={require("../../images/needsWater.png")} alt="wateredTD"></img>
                    <p> = needs a water</p>
                </div>
                <div className="instructions">click on the water drop to update the last watered date!</div>
            </div>

    )
}