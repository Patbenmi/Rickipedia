import React from 'react';
import '../../App.css';

function Locations(props) {
    return (
        <div className="locationsPage">
            <div className="locationsTitle">
                <h1 className="ab1">Locations</h1>
            </div>
            <div class="locationBody" >
                {props.locations.map(location => (
                    <div class="dropdown">
                        <ul>
                            <li><h3 class="dropbtn">{location.name}</h3></li>
                            <div class="dropdown-content">
                                <li> <h4>Dimension: {location.dimension}</h4></li>
                                <li>  <h4>Type: {location.type}</h4></li>
                            </div>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Locations
