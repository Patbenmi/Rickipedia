import React from 'react';


function Locations(props) {
    return (
        <div>
            {props.locations.map(location => (
                <>
                <ul>
                    <li><h2>Name  {location.name}</h2></li>
                    <li><h4>Dimension: {location.dimension}</h4></li>
                    <li><h4>Type: {location.type}</h4></li>
                </ul>
                </>
            ))}
        </div>
    )
}

export default Locations
