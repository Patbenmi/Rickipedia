import React from 'react';
import '../../../src/App.css'
import { Link } from 'react-router-dom'

function Characters(props) {
    return (
        <div className="charactersPage">
            <div className="charactersTitle">
                <h1>Meet the Characters</h1>
                <br>
                </br>
            </div>
            <div className="characterCard">
                {props.characters.map((character, i) => (
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <img className="characterPic" src={character.image} alt='RickAndMorty'></img>
                                <p key={i}><Link to={`/character/${i}`}>{character.name}</Link></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters