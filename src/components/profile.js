import React from 'react'
import { Paper, Button, TextField} from '@material-ui/core';
import AddCar from './addCar';
import { connect } from "react-redux";
import { updateClick } from "../redux/actions";

class Profile extends React.Component {    
  constructor(props) {
    super(props);   
  }

  render() {
    console.log(this.props.isClick)
    return(  
      <Paper elevation={3} className='profile_cont'>
        <div className='profile_info inl left'>
          <div><img src="./ava.png"/></div>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Car</div>
        </div>
        <div className='adding_car inl right'>
          {this.props.isClick ? <AddCar/> : 
            <Button variant="contained" color="primary"onClick={()=> this.setClick()}>Add car</Button>}
        </div>
      </Paper>  
  )}

  setClick(){
    this.dispatchUpdateClick(true) 
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
)(Profile);