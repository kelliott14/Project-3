import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Input, Label, Button } from "../components/AddPlant";
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
        newPlantSpot: "",
        newPlantFrom: "",
        selectedOption: null,
        cycleOptions: [{ value: "daily", label: "daily", numValue: 1},
                        {value: "weekly", label: "weekly", numValue: 7},
                        {value: "fortnightly", label: "fortnightly", numValue: 14},
                        {value: "monthly", label: "monthly", numValue: 30}]
    };

    //handle change for startdate field
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    //handle change for dropdown field
    handleDropdownChange = selectedOption => {
        this.setState({ selectedOption });
    }

    //on load of page
    componentDidMount = () => {
        API.getUserData(this.props.match.params.id)
            .then(res => 
                this.setState({
                    username: res.data.username,
                    id: res.data._id,
                    plants: res.data.plants
            }, console.log(this.state)))
            .catch(err => console.log(err))
    };

    //load plants from user into state
    loadPlants = () => {
        console.log(this.state.id)
        API.getUserData(this.props.match.params.id)
            .then(res => 
                this.setState({
                username: res.data.username,
                id: res.data.id,
                plants: res.data.plants
            }, console.log(this.state)))
            .catch(err => console.log(err), console.log(this.state));
            
    }

    //delete user's profile
    deleteProfile = (id) => {
        API.deleteProfile(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    };

    //add plant to db
    addNewPlant = (event) => {
        event.preventDefault();
        //sets the next water date into a variable thisMoment
        let thisMoment = new Date(this.state.startDate);
        thisMoment.setDate(thisMoment.getDate() + this.state.selectedOption.numValue);
        
        //sets the new plant details into a variable plantToAdd
        let plantToAdd = {
            plant_name: this.state.newPlantName,
            nickname: this.state.newPlantNickname,
            lastWatered: this.state.startDate,
            waterCycle: this.state.selectedOption.value,
            nextWater: this.state.selectedOption.numValue,
            spot: this.state.newPlantSpot,
            from: this.state.newPlantFrom,
            nextWaterDate: thisMoment
        };
        //adds the plantToAdd variable to the db
        API.addPlant(this.props.match.params.id, plantToAdd)
            .then(res => 
                this.setState({
                    plants: res.data.plants
                },
                //reloads the plants with the new response post db update
                this.loadPlants(),
                //resets the the state to blank
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

    //handle input change on input fields
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    //changes the last watered and next watered dates in db
    waterPlant = (event, id, waterCycle) => {
        event.preventDefault();
        let thisMoment = new Date();
        console.log(waterCycle)
        thisMoment.setDate(thisMoment.getDate() + waterCycle);
        
        let dateUpdate = {
            nextWaterDate: thisMoment,
            lastWatered: new Date()
        };
        
        API.updatePlant(id, dateUpdate)
            .then(res => console.log(res),
            
                this.loadPlants()
                )
            .catch(err => console.log(err))
    }
    
    //page render
    render() {
        const { selectedOption } = this.state;
        const calendarStrings = {
            lastDay : '[yesterday]',
            sameDay : '[today]',
            nextDay : '[tomorrow]',
            thisWeek : 'dddd',
            lastWeek : '[last] dddd',
            nextWeek : '[next] dddd',
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
                    onClick={(event) => this.addNewPlant(event)}
                    // type="submit"
                    className="input-lg"
                    // role="button"
                    >
                    add
                </Button>
               
               {/* Display of each plant */}
                {this.state.plants.length > 0 ? (
                this.state.plants.map((plant, index) => (
                    
                    <EachPlantOuter key={index}>
                        <EachPlantCardInner> 
                            <Button
                                onClick={(event) => this.waterPlant(event, plant._id, plant.nextWater)}
                                // type="submit"
                                className='input-lg'
                                // value="submit"
                                >watered</Button>
                        <div className="card-title">{plant.nickname} the {plant.plant_name}</div>
                        <div className="card-subtitle">was last watered <Moment calendar={calendarStrings}>{plant.lastWatered}</Moment>
                            </div>
                        <div className="card-subtitle">and will need another water <Moment calendar={calendarStrings}>{plant.nextWaterDate}</Moment>
                        </div>
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