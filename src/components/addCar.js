import React from 'react'
import { Paper, Button, TextField, Icon} from '@material-ui/core';
import { connect } from "react-redux";
import { updateClick } from "../redux/actions";
import DriveEtaSharpIcon from '@material-ui/icons/DriveEtaSharp';
import { BrandingWatermarkOutlined } from '@material-ui/icons';

class AddCar extends React.Component {    
  constructor(props) {
    super(props);
  }

  render() {
    return(  
      <Paper elevation={3} className='add_cont'>
        <div className='inl left add_car_h'>Add car</div><div className='inl right'><DriveEtaSharpIcon/></div>
        <div className="car_cont">
          <div><TextField label="Car brand"  variant="outlined" id='brand'/></div><br/>
          <div><TextField label="Car color" variant="outlined"  id='color'/></div><br/>
          <p><Button variant="contained" color="primary" id='add' onClick={ ()=> this.addCar()}> Add</Button></p>
        </div>
      </Paper>  
  )}

  addCar(){
    global.a = this;
    let car ={
      brand: document.getElementById('brand').value,
      color: document.getElementById('color').value
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