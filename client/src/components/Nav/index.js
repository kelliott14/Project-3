import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">Logo here</a>
            <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/myaccount">My Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/myplants">My Plants</a>
                </li> 
                <li className="nav-item">
                    <a className="nav-link" href="/myreminders">My Reminders</a>
                </li>               
                </ul>
            </div>
        </nav>
    )
}

export default Nav;