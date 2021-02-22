<<<<<<< HEAD
import React from 'react';
import axios from "axios"
=======
import React, { useState, useEffect } from 'react';

>>>>>>> b13ab2e4186b6417174ae94fb5fd78ff378ea51a

function Characters(props) {
    return(
       <div>
<<<<<<< HEAD
=======
           {props.characters.map(character => (
               <>
               <img src={character.image}></img>
               <h1>{character.name}</h1>
               <h4>Species: {character.species}</h4>
               <h4>Status: {character.status}</h4>
               </>
           ))}
>>>>>>> b13ab2e4186b6417174ae94fb5fd78ff378ea51a
       </div>
    )
}
     

export default Characters
