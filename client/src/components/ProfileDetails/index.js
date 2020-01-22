import React from "react";
import "./style.css";

function ProfileDetail(props) {
    return (
        <div className="jumbotron">
            <div className="ohHello">oh, hello <span className="profileName">{props.username}</span>, welcome back!</div>
            
        </div>
    )
}

export default ProfileDetail;