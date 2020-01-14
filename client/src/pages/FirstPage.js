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
                <Jumbo header="Welcome to plant saver"/>
                <SignInForm></SignInForm>
            </div>
  );
}

}
export default MyAccount;