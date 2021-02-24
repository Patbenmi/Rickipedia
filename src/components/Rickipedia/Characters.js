import React from 'react';
import '../../../src/App.css'
import { Link } from 'react-router-dom'

function Characters(props) {
    return (
        <div className="characterCard">
            {props.characters.map((character, i) => (
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <img className="characterPic" src={character.image}></img>
                            <p key={i}><Link to={`/character/${i}`}>{character.name}</Link></p>
                            {/* <p>{character.name}</p> */}
                            {/* <p>Species: {character.species} | Status: {character.status}</p> */}

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters