import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    console.log(props);
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>User Name:</strong> {props.user.userName}</p>
        <p><strong>You are a:</strong> {props.user.rickOrMorty}</p>
        <p><strong>Dimension:</strong> {props.user.dimension}</p> 
        <p><strong>ID:</strong> {props.user.id}</p> 
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