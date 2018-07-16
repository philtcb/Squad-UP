import React, { Component } from 'react';
import './Add_Park_Style.css';
import Link from "gatsby-link";

class Add_Park extends Component {
  constructor(props) { //constructor of props and states
    super(props);
    
    this.state = { //three fields for add parK: name, locaiton and sport
      park_name: '',
      park_location: '',
      selector: '',
    }
    this.handleSubmit= this.handleSubmit.bind(this); 
    this.handleSports=this.handleSports.bind(this);

  }

  //functions/methods that receive inputs

  handleParknameChange(event){
    this.setState({
      park_name: event.target.value
    })
  }
  handleLocationChange(event){
    this.setState({
      park_location: event.target.value
    })
  }
  handleSports(event){
    this.setState({
      selector: event.target.value
    })
  }
  handleSubmit(event){
    const {park_name, park_location, selector}=this.state
    alert("Park Name: "+this.state.park_name
      +"\nPark Location: "+this.state.park_location
      +"\nSports: "+this.state.selector+
      "\nYou are all set!\n ");
    //here an alert window is popped up
    this.setState({
      park_name: '',
      park_location: '',
      selector: ''
    })
    

  }

  render(){
    const {park_name, park_location, selector}=this.state
    const enabled= 
      park_name.length > 0 &&
      park_location.length>0 && 
      selector.length>0; //unable the sumbit button when no input

    return (
      <body>
        <div className="MyHeader">
          <h2>Add Park</h2>
            <div className="back-button"> 
             <Link to="/">
              <button class="btn btn-info btn-lg" role="button">Back</button>
             </Link> 
             //Need to refresh after clicking, don't know why
            </div>
        </div>

        <div className="forms">
          <div className="ParkName">
            Park Name
          </div>
            <div className="name_field">
              <input value={this.state.park_name} 
              onChange={this.handleParknameChange.bind(this)} 
              placeholder="e.g. Rucker Park?" 
              style={{width: "100%", height:"100%"}}
              required />
            </div>

          <div className="LocationName">
            Park Location
          </div>

            <div className="location_field">
              <input value={this.state.park_location}
              onChange={this.handleLocationChange.bind(this)}
              placeholder="e.g. 5th Avenue"
              style={{width: "100%", height:"100%"}} required />
            </div>
          <div className="picker">
            <select onChange={this.handleSports} value={this.state.selector} style={{width: "50%", height:"100%"}}>
              <option value="" disabled selected>Which Sport?</option>
              <option value="Basketball">Basketball</option>
              <option value="Soccer">Soccer</option>
              <option value="Frisbee">Frisbee</option>
              <option value="Football">Football</option>
              <option value="Baseball">Baseball</option>
            </select>
          </div>

          <div className="submit-button">
            <button onClick={this.handleSubmit} disabled={!enabled}>Submit</button>
          </div>
        </div>
        
      </body>
      );
  }
}

export default Add_Park;