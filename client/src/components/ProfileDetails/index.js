import React from "react";
import "./style.css";

function ProfileDetail(props) {
    return (
        <div className="jumbotron">
            <h2 className="header">{props.username}</h2>
        </div>
    )
}

export default ProfileDetail;