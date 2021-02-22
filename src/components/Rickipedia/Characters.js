import React, { useState, useEffect } from 'react';


function Characters(props) {
    return(
       <div>
           {props.characters.map(character => (
               <>
               <img src={character.image}></img>
               <h1>{character.name}</h1>
               <h4>Species: {character.species}</h4>
               <h4>Status: {character.status}</h4>
               </>
           ))}
       </div>
    )
}
     

export default Characters
