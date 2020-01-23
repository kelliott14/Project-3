import React, { Component } from "react";
import "./style.css";

class Nav extends Component {
    state = {
        navBarState: "collapse navbar-collapse hide"
    };

    componentDidMount() {
        this.setState({
            navBarState: "collapse navbar-collapse hide"
        })
    }

    toggleNavbar = () => {
        this.state.navBarState === "collapse navbar-collapse hide" ?
             this.setState({
                navBarState: "collapse navbar-collapse show"
            })
        :
             this.setState({
                navBarState: "collapse navbar-collapse hide"
            })
    }

render() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-brand" onClick={this.toggleNavbar}>
                <img src={require("../../images/logoNoBG.png")} alt="logo"></img></div>
            <div className={this.state.navBarState} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/myaccount/:id">My Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Log Out</a>
                </li>             
                </ul>
            </div>
        </nav>
    )
}

}

export default Nav;