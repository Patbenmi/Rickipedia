import React from 'react';
import '../../../src/App.css'

function Characters(props) {
    return(
       <div className="characterCard">
           {props.characters.map(character => (
               <>
                <img className="characterPic" src={character.image}></img>
                <h5>{character.name}</h5>
                <p>Species: {character.species} | Status: {character.status}</p>
               </>
           ))}
       </div>
    )
}
     
export default Characters