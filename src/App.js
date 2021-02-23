import React, { useEffect, useState, } from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Rickipedia/Home'
import Characters from './components/Rickipedia/Characters'
import Locations from './components/Rickipedia/Locations'
import Theories from './components/Rickipedia/Theories'
import Episodes from './components/Rickipedia/Episodes'
import Episode from './components/Rickipedia/Episode'

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


useEffect(() => {
  fetch('http://localhost:8000/wiki/characters')
    .then(res => res.json())
    .then(characterData => {
      setCharacters(characterData)
    })
}, [])

useEffect(() => {
  fetch('http://localhost:8000/wiki/episodes')
    .then(res => res.json())
    .then(episodeData => {
      setEpisodes(episodeData)
    })
}, [])

useEffect(() => {
  fetch('http://localhost:8000/wiki/locations')
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
  console.log('nowCurrentUser is working...');
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

console.log('Current User', currentUser);
console.log('Authenicated', isAuthenticated);

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
          <PrivateRoute path="/profile" component={ Profile } user={currentUser} />
          <Route exact path="/" component={ Welcome } />
          <Route path="/home" component={ Home } user={currentUser}/>
          <Route path="/characters" render={()=>  <Characters characters={characters}/>}/>
          <Route path="/locations" render={()=>  <Locations locations={locations}/>}/>
          <Route path="/theories" component={ Theories } user={currentUser}/>
          <Route path="/episodes" render={() => <Episodes episodes={episodes} /> }/>
          <Route path="/episode/:id" render={(props) => <Episode {...props} episodes={episodes} /> }/>
        </Switch>
      </div>
      <Footer />
    </div>
    <Footer />
  </div>
)}


console.log("Hi guys testing")

export default App
