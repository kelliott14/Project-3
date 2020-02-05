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
                <Jumbo header="Welcome to plant saver." biline="do a little dance, save your little plants" className="firstPage"/>
                <h3 className="hint lead display-4">Hint: are you here for a demo? Use "demo" as the username and password ;) </h3>
                <SignInForm></SignInForm>
            </div>
  );
}

}
export default MyAccount;