import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import ProfileDetails from "../components/ProfileDetails";
import API from "../utils/API";

class MyAccount extends Component {
    state = {
        username: "",
        id: "",
        plants: []
    };

    deleteProfile = (id) => {
        API.deleteProfile(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    };

    getUser = (id) => {
        API.getUser(id)
            .then(res => this.setState ({
                username: res.username,
                plants: res.plants
                }
                )
                )
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <Jumbo header="My Profile"/>
                <ProfileDetails username={this.state.username} />
                <Jumbo header="See my plants"/>
            </div>
  );
}

}
export default MyAccount;