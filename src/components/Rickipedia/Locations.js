import React from 'react';
import '../../App.css';


function Locations(props) {
    return (
        <div className="locationsPage">
            <div className="locationsTitle">
                <h1>Locations</h1>
                <br>
                </br>
            </div>
            <div class="locationBody" >
                {props.locations.map(location => (
                    <div class="locations">
                        <ul>
                            <li><h3>{location.name}</h3></li>
                            <li><h4>Dimension: {location.dimension}</h4></li>
                            <li><h4>Type: {location.type}</h4></li>
                            <hr></hr>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Locations
