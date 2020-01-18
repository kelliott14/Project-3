import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Input, Label, Button, Dropdown } from "../components/AddPlant";
import ProfileDetails from "../components/ProfileDetails";
import API from "../utils/API";
import { EachPlantOuter, EachPlantCardInner } from "../components/EachPlant";

//External library DatePicker for calendar field
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//External library React-Select for dropdown field
import Select from 'react-select';

//External library React Moment for date formatting
import Moment from 'react-moment';


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
        newPlantFrom: "",
        selectedOption: null,
        cycleOptions: [{ value: "daily", label: "daily"},
                        {value: "weekly", label: "weekly"},
                        {value: "fortnightly", label: "fortnightly"},
                        {value: "monthly", label: "monthly"}]
    };

    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    handleDropdownChange = selectedOption => {
        this.setState({ selectedOption });
    }

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
                        lastWatered: this.state.startDate,
                        waterCycle: this.state.selectedOption.value,
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
        const { selectedOption } = this.state;
        const calendarStrings = {
            lastDay : '[Yesterday]',
            sameDay : '[Today]',
            nextDay : '[Tomorrow]',
            lastWeek : '[last] dddd',
            nextWeek : 'dddd',
            sameElse : 'L'
        };

        return (
            <div>
                <Jumbo header="My Profile"/>
                <ProfileDetails username={this.state.username}/>
                <Jumbo header="My plants"/>

                {/* Plant name input */}
                <div className="form-group">
                    <Label title="plant name"></Label>
                    <Input 
                        name="newPlantName"
                        value={this.state.newPlantName}
                        onChange={this.handleInputChange}
                        placeholder="eg. lemon tree"
                        />
                </div>

                {/* Plant nickname input */}
                <div className="form-group">
                    <Label title="nickname"></Label>
                    <Input name="newPlantNickname"
                        value={this.state.newPlantNickname}
                        onChange={this.handleInputChange}
                        placeholder="eg. Lemony Snickett"
                        type="input"/>
                </div>

                {/* Last Watered date input */}
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
                
                {/* Watering Cycle options */}
                <div className="form-group">
                    <Label title="watering cycle"></Label>
                    <Select
                        value={selectedOption}
                        name="selectedOption"
                        onChange={this.handleDropdownChange}
                        options={this.state.cycleOptions}
                        />
                </div>

                {/* From Input */}
                <div className="form-group">
                    <Label title="from"></Label>
                    <Input name="newPlantFrom"
                        value={this.state.newPlantFrom}
                        onChange={this.handleInputChange}
                        placeholder="eg. nursery name or grafted from plant"
                        type="input"/>
                </div>

                {/* Spot Input */}
                <div className="form-group">
                    <Label title="spot"></Label>
                    <Input name="newPlantSpot"
                        value={this.state.newPlantSpot}
                        onChange={this.handleInputChange}
                        placeholder="eg. loungeroom window"
                        type="input"/>
                </div>

                {/* Submit button to add plant */}
                <Button
                    onClick={this.addNewPlant}
                    type="submit"
                    className="input-lg"
                    value="submit"
                    >
                    add
                    </Button>
               
                      {this.state.plants.length > 0 ? (
                        this.state.plants.map((plant, index) => (
                            
                          <EachPlantOuter key={index}>
                              <EachPlantCardInner> 
                                <div className="card-title">{plant.plant_name}</div>
                                <div className="card-subtitle">{plant.nickname}</div>
                                <div className="card-subtitle">last watered: 
                                     <Moment calendar={calendarStrings}>{plant.lastWatered}</Moment>
                                 </div>
                                <div className="card-subtitle">{plant.waterCycle}</div>
                                <div className="card-subtitle">{plant.from}</div>
                                <div className="card-subtitle">{plant.spot}</div>   
                            </EachPlantCardInner>
                          </EachPlantOuter>
                                   
                      ))) : (<h3>no results</h3>)}
                      
            </div>
  );
}

}
export default MyAccount;