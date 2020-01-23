import React from "react";
import "./style.css";

function Jumbo(props) {
    return (
        <div className="jumbotron">
            <h1 className="header">{props.header}</h1>
            <p className="biline">{props.biline}</p>
        </div>
    )
}

export default Jumbo;