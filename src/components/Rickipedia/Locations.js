import React from 'react';
import '../../App.css';


function Locations(props) {
    return (
        <div class="locationBody" >
            {props.locations.map(location => (
                <div class="locations">
                <ul>
                    <li><h2>{location.name}</h2></li>
                    <li><h4>Dimension: {location.dimension}</h4></li>
                    <li><h4>Type: {location.type}</h4></li>
                </ul>
                </div>
            ))}
        </div>
    )
}

export default Locations
