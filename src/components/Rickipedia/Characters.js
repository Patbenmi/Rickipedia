import React from 'react';
import axios from "axios"

function Characters(props) {

    props.getCharacters()
    
    return(
        <div>
            {/* {props.characters.map((character, i) => {
                return (
                    <li>
                        <h1>{character.name}</h1>
                        <img src={character.image}></img>
                        <p>Species: {character.species}</p>
                        <p>Status: {character.status}</p>
                        <p>Origin: {character.origin}</p>
                    </li>
                )
            })} */}
        </div>
    )
}

export default Characters
