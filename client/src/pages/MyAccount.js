import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Input, Label, Dropdown } from "../components/AddPlant";
import ProfileDetails from "../components/ProfileDetails";
import API from "../utils/API";

class MyAccount extends Component {
    state = {
        username: "",
        id: "",
        plants: [],
        newPlant: {
            name: "",
            nickname: ""
        }
    };

    componentDidMount = () => {
        API.getUserData(this.props.match.params.id)
            .then(res => this.setState({
                username: res.data.username,
                id: res.data.id,
                plants: res.data.plants
            }))
            .catch(err => console.log(err))
    };

    loadPlants = () => {
        API.getUserData(this.props.match.params.id)
            .then(res => this.setState({
                username: res.data.username,
                id: res.data.id,
                plants: res.data.plants
            }))
            .catch(err => console.log(err))
    }

    deleteProfile = (id) => {
        API.deleteProfile(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    };

    addNewPlant = () => {
        API.addPlant(this.state.id, this.state.newPlant)
            .then(res => this.loadPlants())
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

  
    render() {
        return (
            <div>
                <Jumbo header="My Profile"/>
                <ProfileDetails username={this.state.username}/>
                <Jumbo header="My plants"/>
                <div className="form-group">
                    <Label title="plant name"></Label>
                    <Input name="plantname"
                        value={this.state.newPlant.name}
                        onChange={this.handleInputChange}
                        placeholder="enter the plant name"/>
                </div>
                <div className="form-group">
                    <Label title="nickname"></Label>
                    <Input name="nickname"
                        value={this.state.newPlant.nickname}
                        onChange={this.handleInputChange}
                        placeholder="enter a nick name"/>
                </div>
            </div>
  );
}

}
export default MyAccount;