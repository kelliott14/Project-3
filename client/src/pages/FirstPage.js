import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import SignInForm from "../components/SignInForm";


class MyAccount extends Component {
    state = {
        username: "",
        id: "",
        password: "",
        plants: []
    };

    render() {
        return (
            <div>
                <Jumbo header="Welcome to plant saver." biline="do a little dance, save your little plants"/>
                <SignInForm></SignInForm>
            </div>
  );
}

}
export default MyAccount;