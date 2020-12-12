import AddCar from './components/addCar';
import Profile from './components/profile';


function App() {
  return (
    <div id='main'>
    <div className='header'>
        <span className='logo'></span>
        <span ><a href='#'>create</a></span>|
        <span ><a href='#'>find</a></span>
    </div>
    <Profile/>
  </div>
  );
}

export default App;
