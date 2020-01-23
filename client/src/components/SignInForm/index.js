import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import Jumbo from "../Jumbotron";

class SignInForm extends Component {
    state = {
        newUsername: "",
        newPassword: "",
        logInUsername: "",
        logInPassword: "",
        errorLogin: false
    };

    newUser = event => {
        event.preventDefault();
        if (this.state.newUsername && this.state.newUsername) {
            API.createUser({
            username: this.state.newUsername,
            password: this.state.newPassword
        })
        .then(res => window.location.replace("/myaccount/" + res.data._id))
        .catch(err => this.setState({
                errorLogin: true
        }));
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
        API.login(this.state.logInUsername, this.state.logInPassword)
            .then(res => window.location.replace("/myaccount/" + res.data._id))
        .catch(err => this.setState({
            errorLogin: true
            })
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.errorLogin ? 
                        <Jumbo biline="Looks like you might be new here, did you want to try creating a new account instead? Or you can try to login again."></Jumbo>
                        : null}
                </div>

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
        </div>
        )
    }
}

export default SignInForm;