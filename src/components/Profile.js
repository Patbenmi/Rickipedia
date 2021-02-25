import React, { useState } from 'react';
import Login from './Login'
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios')
require('dotenv').config()
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
    let [redirect, setRedirect] = useState(false)
    console.log(props);

    
    const handleDelete = (e) => {
        e.preventDefault()
        axios.post(`${REACT_APP_SERVER_URL}/api/profile`, {id: props.user.id})
        .then(response => {
            console.log(response)
            setRedirect(true)
            props.setIsAuthenticated(false)
        })
    }
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>User Name:</strong> {props.user.userName}</p>
        <p><strong>You are a:</strong> {props.user.rickOrMorty}</p>
        <p><strong>Dimension:</strong> {props.user.dimension}</p> 
        <p><strong>ID:</strong> {props.user.id}</p> 
        {console.log('11111', props.user)}
        <form>
            <button type="submit" onClick={handleDelete}className="btn btn-primary float-right">Delete</button>
        </form>

    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    if (redirect) return <Redirect to="/" />
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Profile;