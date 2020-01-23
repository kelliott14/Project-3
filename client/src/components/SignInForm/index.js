import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class SignInForm extends Component {
    state = {
        newUsername: "",
        newPassword: "",
        logInUsername: "",
        logInPassword: ""
    };

    newUser = event => {
        event.preventDefault();
        if (this.state.newUsername && this.state.newUsername) {
            API.createUser({
            username: this.state.newUsername,
            password: this.state.newPassword
        })
        .then(res => window.location.replace("/myaccount/" + res.data._id))
        .catch(err => console.log(err));
        } 
    }
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("login clicked", this.state.logInUsername)
        API.login(this.state.logInUsername, this.state.logInPassword)
            .then(res => window.location.replace("/myaccount/" + res.data._id))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="signInForm">
                <div className="jumbotron">
                    <form className="logInForm">
                        <h2 className="loginHeader">log in to an existing account</h2>
                        <div className="form-group">
                            <label>username</label>
                            <input value={this.state.logInUsername}
                                    name="logInUsername"
                                    onChange={this.handleInputChange}
                                    type="input" className="form-control" id="logInUsernameInput"></input>
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input value={this.state.logInPassword}
                                onChange={this.handleInputChange}
                                name="logInPassword"
                                type="password" className="form-control" id="Input"></input>
                        </div>
                        <button type="submit" className="btn signInBtn"
                                onClick={this.handleFormSubmit}>log in</button>
                    </form>
                    
                </div>
                <div className="jumbotron">
                <form className="createUserForm">
                    <h2 className="loginHeader">create a new account</h2>
                    <div className="form-group">
                        <label>username</label>
                        <input value={this.state.newUsername}
                                onChange={this.handleInputChange}
                                name="newUsername"
                                type="input" className="form-control" id="newUsernameInput"></input>
                    </div>
                    <div className="form-group">
                        <label >password</label>
                        <input value={this.state.newPassword}
                                onChange={this.handleInputChange}
                                name="newPassword"
                                type="password" className="form-control" id="newPasswordInput"></input>
                    </div>
                    <button type="submit" className="btn signInBtn" 
                        onClick={this.newUser}>create</button>
                </form>
                
            </div>
        </div>
        )
    }
}

export default SignInForm;