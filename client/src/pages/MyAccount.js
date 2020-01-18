import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Input, Label, Button, Dropdown } from "../components/AddPlant";
import ProfileDetails from "../components/ProfileDetails";
import API from "../utils/API";
import { EachPlantOuter, EachPlantCardInner } from "../components/EachPlant";

//External library DatePicker for calendar field
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class MyAccount extends Component {
    state = {
        startDate: new Date(),
        username: "",
        id: "",
        plants: [],
        newPlantName: "",
        newPlantNickname: "",
        newPlantLastWatered: "",
        newPlantCycle: "",
        newPlant: {},
        newPlantSpot: "",
        newPlantFrom: ""
    };

    handleChange = date => {
        this.setState({
          startDate: date
        });
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
            
    }

    deleteProfile = (id) => {
        API.deleteProfile(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    };

    addNewPlant = () => {
        let update = {
                        plant_name: this.state.newPlantName,
                        nickname: this.state.newPlantNickname,
                        lastWatered: this.state.newPlantLastWatered,
                        waterCycle: this.state.newPlantCycle,
                        spot: this.state.newPlantSpot,
                        from: this.state.newPlantFrom
                    }
        API.addPlant(this.state.id, update)
            .then(res => 
                this.setState({
                    plants: res.data.plants
                },
                this.loadPlants(),
                this.setState({
                    newPlantName: "",
                    newPlantNickname: "",
                    newPlantLastWatered: "",
                    newPlantCycle: "",
                    newPlant: {},
                    newPlantSpot: "",
                    newPlantFrom: ""
                })))
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
                    <Input 
                        name="newPlantName"
                        value={this.state.newPlantName}
                        onChange={this.handleInputChange}
                        placeholder="eg. lemon tree"
                        />
                </div>
                <div className="form-group">
                    <Label title="nickname"></Label>
                    <Input name="newPlantNickname"
                        value={this.state.newPlantNickname}
                        onChange={this.handleInputChange}
                        placeholder="eg. Lemony Snickett"
                        type="input"/>
                </div>
                <div className="form-group">
                    <Label title="last watered"></Label>
                    <DatePicker
                            name="newPlantLastWatered"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            value={this.state.startDate}
                            dateFormat="dd/MM/yyyy"
                        />
                </div>
                <div className="form-group">
                    <Label title="watering cycle"></Label>
                    <Dropdown
                        value={this.state.newPlantCycle}
                        name="newPlantCycle"
                        onChange={this.handleInputChange}>
                        
                    </Dropdown>
                </div>
                <div className="form-group">
                    <Label title="from"></Label>
                    <Input name="newPlantFrom"
                        value={this.state.newPlantFrom}
                        onChange={this.handleInputChange}
                        placeholder="eg. nursery name or grafted from plant"
                        type="input"/>
                </div>

                <div className="form-group">
                    <Label title="spot"></Label>
                    <Input name="newPlantSpot"
                        value={this.state.newPlantSpot}
                        onChange={this.handleInputChange}
                        placeholder="eg. loungeroom window"
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
                        this.state.plants.map((plant, index) => (
                            
                          <EachPlantOuter key={index}>
                              <EachPlantCardInner> 
                              <div className="card-title">{plant.plant_name}</div>
                            <div className="card-subtitle">{plant.nickname}</div></EachPlantCardInner>
                          </EachPlantOuter>
                                   
                      ))) : (<h3>no results</h3>)}
                      
            </div>
  );
}

}
export default MyAccount;