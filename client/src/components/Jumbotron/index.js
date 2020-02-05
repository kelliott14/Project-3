import React from "react";
import "./style.css";

function Jumbo(props) {
    return (
        <div className="jumbotron">
            <h1 className="header display-4">{props.header}</h1>
            <h3 className="biline lead display-4">{props.biline}</h3>
        </div>
    )
}

export default Jumbo;