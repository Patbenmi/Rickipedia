import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
    let [email, setEmail] = useState('')
    let [userName, setUserName] = useState('')
    let [rickOrMorty, setRickOrMorty] = useState('')
    let [dimension, setDimension] = useState('')
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [redirect, setRedirect] = useState(false);

    const handleUserName = (e) => {
        setUserName(e.target.value);
        console.log('22222', userName)
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
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { userName, email, password, dimension, rickOrMorty }

            axios.post(`${REACT_APP_SERVER_URL}/api/signup`, newUser)
            .then(response => {
                console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log(error));
        }
    }

    if (redirect) return <Redirect to="/login" />

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">User Name</label>
                            <input type="text" name="userName" value={userName} onChange={handleUserName} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rickOrMorty">Rick?: </label>
                            <input type="radio" name="rickOrMorty" value={rickOrMorty} onChange={handleRickOrMorty} className="form-control"/>
                            <label htmlFor="rickOrMorty">Morty?: </label>
                            <input type="radio" name="rickOrMorty" value={rickOrMorty} onChange={handleRickOrMorty} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dimension">Dimension</label>
                            <input type="text" name="dimension" value={dimension} onChange={handleDimension} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Signup;
