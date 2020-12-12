import AddCar from './components/addCar';
import Profile from './components/profile';
import {AppBar,Toolbar, Button} from '@material-ui/core';

function App() {
  return (
    <div id='main'>
     <AppBar position="static"> 
      <Toolbar className='nav_cont'>    
        <h2>Car 2 go</h2> 
        <div className='header'> 
          <Button variant="contained" color='primary'>Profile</Button>
          &nbsp;&nbsp;
          <Button variant="contained" color='primary'>Home</Button>          
        </div>         
      </Toolbar>       
     </AppBar>
    <Profile/>
  </div>
  );
}

export default App;
