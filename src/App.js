import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const utilities = [
  {
    value: "ELE",
    label: "Electricity"
  },
  {
    value: "HW",
    label: "Hot Water"
  },
  {
    value: "Gas",
    label: "Gas"
  },
  {
    value: "INTERNET",
    label: "Internet"
  },
  {
    value: "Null",
    label: "None"
  }

];


class App extends Component {
  state = {
    name: "",
    number: "",
    utility: "ELE",
    utility1: "Null",
    utility2: "Null",
    utility3: "Null",
    utility4: "Null",
    utility5: "Null",
  };

// allows changes to the defaulted vaule of the textbox using "setState"
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
  
    return (
      <div className="App">
        <TextField
          id="number"
          label="Please Enter Site Number"
    //      className={classes.textField}

    //assign the vaule in the textfeild
          value={this.state.number}
         onChange={this.handleChange('number')}
         // margin="normal"
          type="text" pattern="[0-9]*" 
       


        />

           <TextField
          id="name"
          label="Please Enter Site Name"
    //      className={classes.textField}

    //assign the vaule in the textfeild
          value={this.state.name}
         onChange={this.handleChange('name')}
         // margin="normal"
        />
     
     <TextField
          id="standard-select"
          select
          label="Select Service"
      //    className={classes.textField}
          value={this.state.utility}
          onChange={this.handleChange('utility')}
          SelectProps={{
            native: true,
            MenuProps: {
     //         className: classes.menu,
            },
          }}
         
         // margin="normal"
        >
          {utilities.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

          <TextField
          id="standard-select"
          select
          label="Select Service"
      //    className={classes.textField}
          value={this.state.utility1}
          onChange={this.handleChange('utility1')}
          SelectProps={{
            native: true,
            MenuProps: {
     //         className: classes.menu,
            },
          }}
         
         // margin="normal"
        >
          {utilities.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

               <TextField
          id="standard-select"
          select
          label="Select Service"
      //    className={classes.textField}
          value={this.state.utility2}
          onChange={this.handleChange('utility2')}
          SelectProps={{
            native: true,
            MenuProps: {
     //         className: classes.menu,
            },
          }}
         
         // margin="normal"
        >
          {utilities.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="standard-select"
          select
          label="Select Service"
      //    className={classes.textField}
          value={this.state.utility3}
          onChange={this.handleChange('utility3')}
          SelectProps={{
            native: true,
            MenuProps: {
     //         className: classes.menu,
            },
          }}
         
         // margin="normal"
        >
          {utilities.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        
        <TextField
          id="standard-select"
          select
          label="Select Service"
      //    className={classes.textField}
          value={this.state.utility4}
          onChange={this.handleChange('utility4')}
         // margin="normal"
          SelectProps={{
            native: true,
            MenuProps: {
     //         className: classes.menu,
            },
          }}
         
        
        >

          {utilities.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
              
      <Button variant="contained" size="large"  id="standard">
       
        <SaveIcon  />
        
        Save
        
      </Button>
      
      </div>
      
    );
  }
  
}

export default App;
