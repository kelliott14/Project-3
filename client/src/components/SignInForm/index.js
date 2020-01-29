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
        errorLogin: false,
        errors: {
            newUsername: "",
            newPassword: "",
            logInUsername: "",
            logInPassword: ""
        }
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

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
      }

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        errors[name] = value.length < 4
                  ? 'must be at least 4 characters long'
                  : '';

        this.setState({errors, [name]: value}, ()=> {
        
        })

      };

    
    handleFormSubmit = (event) => {
        event.preventDefault();
        if(this.validateForm(this.state.errors)) {
            console.info('Valid Form')
          }else{
            console.error('Invalid Form')
          }
        API.login(this.state.logInUsername, this.state.logInPassword)
            .then(res => window.location.replace("/myaccount/" + res.data._id))
        .catch(err => this.setState({
            errorLogin: true
            })
        );
    }

    render() {
        const {errors} = this.state;
        return (
            <div>
                <div>
                    {this.state.errorLogin ? 
                        <Jumbo biline="Looks like you might be new here, did you want to try creating a new account instead? Or you can try to login again."></Jumbo>
                        : null}
                </div>

                <div className="signInForm">

                    <div className="card loginBubble">
                        <form className="logInForm">
                            <h2 className="loginHeader card-title">log in to an existing account</h2>
                            <div className="form-group">
                                <label>username</label>
                                <input value={this.state.logInUsername}
                                        name="logInUsername"
                                        onChange={this.handleInputChange}
                                        type="input" className="form-control" id="logInUsernameInput"></input>
                                        {errors.logInUsername.length > 0 && 
                                        <span className='error'>{errors.logInUsername}</span>}
                            </div>
                            <div className="form-group">
                                <label>password</label>
                                <input value={this.state.logInPassword}
                                    onChange={this.handleInputChange}
                                    name="logInPassword"
                                    type="password" className="form-control" id="Input"></input>
                                    {errors.logInPassword.length > 0 && 
                                        <span className='error'>{errors.logInPassword}</span>}
                            </div>
                            <button type="submit" className="btn signInBtn"
                                    onClick={this.handleFormSubmit}>log in</button>
                        </form>
                    </div>

                    <div className="card loginBubble">
                    <form className="createUserForm">
                        <h2 className="loginHeader card-title">create a new account</h2>
                        <div className="form-group">
                            <label>username</label>
                            <input value={this.state.newUsername}
                                    onChange={this.handleInputChange}
                                    name="newUsername"
                                    type="input" className="form-control" id="newUsernameInput"></input>
                                    {errors.newUsername.length > 0 && 
                                        <span className='error'>{errors.newUsername}</span>}
                        </div>
                        <div className="form-group">
                            <label >password</label>
                            <input value={this.state.newPassword}
                                    onChange={this.handleInputChange}
                                    name="newPassword"
                                    type="password" className="form-control" id="newPasswordInput"></input>
                                    {errors.newPassword.length > 0 && 
                                        <span className='error'>{errors.newPassword}</span>}
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