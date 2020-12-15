import Profile from './components/profile';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from './components/header';
import SignUp from './components/signUp';
import LogIn from './components/logIn';

function App() {
  return (
    <div id='main'>     
      <Router>
        <Header/>     
        <Switch>
          <Route path="/sign_up" component={SignUp}/>           
          <Route path="/log_in" component={LogIn} />           
          <Route path="/profile" component={Profile}/>
        </Switch>      
    </Router>

  </div>
  );
}

export default App;
