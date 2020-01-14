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

    newUser = () => {
        if (this.state.newUsername && this.state.newUsername) {
            API.createUser({
            username: this.state.newUsername,
            password: this.state.newPassword
        })
        
        .catch(err => console.log(err));
        } 
    }
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <form>
                        <h2 className="header">log in</h2>
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
                                type="input" className="form-control" id="Input"></input>
                        </div>
                        <button type="submit" className="btn">log in</button>
                    </form>
                    
                </div>
                <div className="jumbotron">
                <form>
                    <h2 className="header">create a new user</h2>
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
                                type="input" className="form-control" id="newPasswordInput"></input>
                    </div>
                    <button type="submit" className="btn" 
                        onClick={this.newUser}>create</button>
                </form>
                
            </div>
        </div>
        )
    }
}

export default SignInForm;