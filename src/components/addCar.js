import React from 'react'
import { Paper, Button, TextField,  Radio, FormLabel, FormControl, FormControlLabel, RadioGroup} from '@material-ui/core';
import { connect } from "react-redux";
import { updateClick } from "../redux/actions";

class AddCar extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {
      seatsValue: 1
    }
  }

  handleSitsChange(_ev, value){
    this.setState({ value: value})
  }
  render() {
    return(  
      <Paper elevation={3} className='add_cont'>
        <h1>Add car</h1>
        <div className="car_cont">
          <div><TextField label="Car brand"  variant="outlined" id='brand'/></div><br/>
          <div><TextField label="Car color" variant="outlined"  id='color'/></div><br/>
          <FormControl component="fieldset">
            <FormLabel component="legend">Free sits</FormLabel>
            <RadioGroup aria-label="sits" name="sits1"  id='sits' onChange={()=> this.handleSitsChange()} >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
            </RadioGroup>
          </FormControl>
          <p><Button variant="contained" color="primary" id='add' onClick={ ()=> this.addCar()}> Add</Button></p>
        </div>
      </Paper>  
  )}

  addCar(){
    global.a = this;
    let car ={
      brand: document.getElementById('brand').value,
      color: document.getElementById('color').value,
      passengers_number: this.state.seatsValue
    }
    console.log(car)
    this.dispatchUpdateClick(false) 
  }
  dispatchUpdateClick(isClick){
    this.props.updateClick(isClick)
  }
}

const mapStateToProps = (state) => {
  return {
    isClick: state.isClick.isClick
  }
}

export default connect(
  mapStateToProps,
  { updateClick }
)(AddCar);