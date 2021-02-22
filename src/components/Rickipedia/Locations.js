import React from 'react';

function Locations(props) {
    return(
        <div>
            {props.locations.map((location, i) => {
                return (
                    <li>
                        <h1>{location.name}</h1>
                        <p>Type: {location.type}</p>
                        <p>Dimension: {location.dimension}</p>
                    </li>
                )
            })}
        </div>
    )
}

export default Locations
