import React, { useEffect, useState, } from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import Characters from './components/Rickipedia/Characters'
import Character from './components/Rickipedia/Character'
import Locations from './components/Rickipedia/Locations'
import Theories from './components/Rickipedia/Theories'
import Episodes from './components/Rickipedia/Episodes'
import Episode from './components/Rickipedia/Episode'
import UpdateProfile from './components/updateProfile'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(props) => {
    return user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }}
  />;
}

function App() {
  // set state values
  let [currentUser, setCurrentUser] = useState("");
  let [isAuthenticated, setIsAuthenticated] = useState(true);
  const [characters, setCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [locations, setLocations] = useState([])
  const [theories, setTheories] = useState([])

useEffect(() => {
  fetch(`${REACT_APP_SERVER_URL}/wiki/theories`)
  .then(res => res.json())
  .then(theoryData => {
    setTheories(theoryData)
  })
}, [])

useEffect(() => {
  fetch(`${REACT_APP_SERVER_URL}/wiki/characters`)
    .then(res => res.json())
    .then(characterData => {
      setCharacters(characterData)
    })
}, [])

useEffect(() => {
  fetch(`${REACT_APP_SERVER_URL}/wiki/episodes`)
    .then(res => res.json())
    .then(episodeData => {
      setEpisodes(episodeData)
    })
}, [])

useEffect(() => {
  fetch(`${REACT_APP_SERVER_URL}/wiki/locations`)
    .then(res => res.json())
    .then(locationData => {
      setLocations(locationData)
    })
}, [])

useEffect(() => {
  let token;
  if (!localStorage.getItem('jwtToken')) {
    setIsAuthenticated(false);
  } else {
    token = jwt_decode(localStorage.getItem('jwtToken'));
    setAuthToken(localStorage.jwtToken);
    setCurrentUser(token);
    setIsAuthenticated(true);
  }
}, []);

const nowCurrentUser = (userData) => {
  setCurrentUser(userData);
  setIsAuthenticated(true);
};

const handleLogout = () => {
  if (localStorage.getItem('jwtToken')) {
    localStorage.removeItem('jwtToken');
    setCurrentUser(null);
    setIsAuthenticated(false);
  }
}

return (
  <div>
    <div>
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path="/signup" component={ Signup } />
          <Route 
            path="/login" 
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
          <Route path="/about" component={ About } />
          <PrivateRoute path="/profile" component={ Profile } user={currentUser} setIsAuthenticated={setIsAuthenticated} handleLogout={handleLogout}/>
          <PrivateRoute path="/update" component={ UpdateProfile } user={currentUser} setCurrentUser={setCurrentUser} />
          <Route exact path="/" component={ Welcome } />         
          <Route path="/characters" render={()=>  <Characters characters={characters}/>}/>
          <Route path="/character/:id" render={(props)=>  <Character {...props} characters={characters}/>}/>
          <Route path="/locations" render={()=>  <Locations locations={locations}/>}/>
          <Route path="/theories" render={()=>  <Theories theories={theories} isAuth={isAuthenticated} user={currentUser}/>}/>
          <Route path="/episodes" render={()=> <Episodes episodes={episodes} /> }/>
          <Route path="/episode/:id" render={(props) => <Episode {...props} episodes={episodes} /> }/>
        </Switch>
      </div>
      <Footer />
    </div>
    <Footer />
  </div>
)}

export default App
