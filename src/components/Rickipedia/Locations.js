import React from 'react';
import '../../App.css';


function Locations(props) {
    return (
        <div class="locationBody" >
            {props.locations.map(location => (
                <div class="dropdown">
                    <ul>
                <div class="divider">
                <li><button class="dropbtn"><h3>{location.name}</h3></button></li>
                </div>
                <div class="dropdown-content">
                <li> <h4>Dimension: {location.dimension}</h4></li>
                <li>  <h4>Type: {location.type}</h4></li>
                    
                    </div>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Locations
