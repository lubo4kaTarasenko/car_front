import React from 'react'
import { Paper, Button, TextField} from '@material-ui/core';
import AddCar from './addCar';

export default class Profile extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {
      click: false
    }
  }

  render() {
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
          <Button variant="contained" color="primary" onClick={()=> this.setClick()}>Add car</Button>
          {this.state.click ? <AddCar/> : null}
        </div>
      </Paper>  
  )}

  setClick(){
    if (this.state.click) this.setState({click: false}) 
    else{
      this.setState({click: true})
    }
  }
}