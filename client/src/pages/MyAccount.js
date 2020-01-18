import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Input, Label, Button } from "../components/AddPlant";
import ProfileDetails from "../components/ProfileDetails";
import API from "../utils/API";
import EachPlant from "../components/EachPlant";

class MyAccount extends Component {
    state = {
        username: "",
        id: "",
        plants: [],
        plantsArr: [],
        newPlantName: "",
        newPlantNickname: "",
        newPlant: {}
    };

    componentDidMount = () => {
        API.getUserData(this.props.match.params.id)
            .then(res => 
                this.setState({
                username: res.data.username,
                id: res.data._id,
                plants: res.data.plants
            }))
            .catch(err => console.log(err))
    };

    loadPlants = () => {
        
        API.getUserData(this.state.id)
            .then(res => 
                this.setState({
                username: res.data.username,
                id: res.data.id,
                plants: res.data.plants
            }))
            .catch(err => console.log(err));
            var newArr = Object.keys(this.state.plants).map(key => {
                return this.state.plants[key]
            })
            console.log(newArr)
    }

    deleteProfile = (id) => {
        API.deleteProfile(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    };

    addNewPlant = () => {
        let update = {
                        plant_name: this.state.newPlantName,
                        nickname: this.state.newPlantNickname
                    }
        API.addPlant(this.state.id, update)
            .then(res => 
                this.setState({
                    username: res.data.username,
                    id: res.data._id,
                    plants: res.data.plants
                }),
                this.loadPlants())
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        console.log(this.state.plants)
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
                    <Input 
                        name="newPlantName"
                        value={this.state.newPlantName}
                        onChange={this.handleInputChange}
                        placeholder="enter the plant name"
                        />
                </div>
                <div className="form-group">
                    <Label title="nickname"></Label>
                    <Input name="newPlantNickname"
                        value={this.state.newPlant.nickname}
                        onChange={this.handleInputChange}
                        placeholder="enter a nick name"
                        type="input"/>
                </div>
                <Button
                        onClick={this.addNewPlant}
                        type="success"
                        className="input-lg"
                      >
                        add
                      </Button>
               
                      {this.state.plants.length > 0 ? (
                        this.state.plants.map(plant => (
                          <EachPlant key={plant._id}
                                    name={plant.plant_name}
                                    nickname={plant.nickname}></EachPlant>
                      ))) : (<h3>no results</h3>)}
                      
            </div>
  );
}

}
export default MyAccount;