import React from 'react';
import Login from './Login'
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios')
require('dotenv').config()
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
    console.log(props);

    
    const handleDelete = (e) => {
        e.preventDefault()
        const deleteUser = { id: props.user.params }
        console.log('2222', deleteUser)
        axios.delete(`${REACT_APP_SERVER_URL}/api/profile`, deleteUser)
        .then(response => {
            console.log(response)
            
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
        <form onSubmit={handleDelete}>
            <button type="submit" className="btn btn-primary float-right">Delete</button>
        </form>

    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Profile;