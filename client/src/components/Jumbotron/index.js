import React from "react";
import "./style.css";

function Jumbo(props) {
    return (
        <div className="jumbotron">
            <h1 className="header">{props.header}</h1>
        </div>
    )
}

export default Jumbo;