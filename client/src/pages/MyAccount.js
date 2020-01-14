import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import BookSearch from "../components/BookSearch";
import { List, ListItem } from "../components/Results";
import API from "../utils/API";
import EachPlant from "../components/EachPlant";

class MyAccount extends Component {
    state = {
        user: ""
    };

    

    render() {
        return (
            <div>
                <Jumbo header="My Profile"/>
                
            </div>
  );
}

}
export default MyAccount;