import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios')
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function UpdateDeleteProfile(props) {
    let [email, setEmail] = useState('')
    let [userName, setUserName] = useState('')
    let [rickOrMorty, setRickOrMorty] = useState('')
    let [dimension, setDimension] = useState('')
    let [redirect, setRedirect] = useState(false)
    console.log('111', rickOrMorty)

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleRickOrMorty = (e) => {
        setRickOrMorty(e.target.value);
    }
    const handleDimension = (e) => {
        setDimension(e.target.value);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('Sanity Check!')
        const updatedUser = { id: props.user.id, userName, email, dimension, rickOrMorty }
        axios.put(`${REACT_APP_SERVER_URL}/api/update`, updatedUser)
            .then(response => {
                console.log(response);
                setRedirect(true)
                props.setCurrentUser(updatedUser)
            })
            .catch(error => console.log(error));
    }
    if (redirect) return <Redirect to="/profile" />

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Update Profile</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" default ={props.user.email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">User Name</label>
                            <input type="text" name="userName" default ={props.user.userName} onChange={handleUserName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rickOrMorty">Rick?: </label>
                            <input type="radio" name="rickOrMorty" value="Rick" onChange={handleRickOrMorty} className="form-control" />
                            <label htmlFor="rickOrMorty">Morty?: </label>
                            <input type="radio" name="rickOrMorty" value="Morty" onChange={handleRickOrMorty} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dimension">Dimension</label>
                            <input type="text" name="dimension" default ={props.user.dimension} onChange={handleDimension} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}