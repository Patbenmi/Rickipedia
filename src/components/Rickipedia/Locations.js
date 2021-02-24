import React from 'react';
import '../../App.css';


function Locations(props) {
    return (
        <div class="locationBody" >
            {props.locations.map(location => (
                <div class="locations">
                <ul>
<<<<<<< HEAD
                    <li><h2>{location.name}</h2></li>
=======
                    <li><h3>{location.name}</h3></li>
>>>>>>> 252c197595d6914f52d8a03ac282bb01a8f84740
                    <li><h4>Dimension: {location.dimension}</h4></li>
                    <li><h4>Type: {location.type}</h4></li>
                    <hr></hr>
                    
                </ul>
                </div>
            ))}
        </div>
    )
}

export default Locations
