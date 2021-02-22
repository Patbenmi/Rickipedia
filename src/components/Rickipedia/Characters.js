import React from 'react';

function Characters(props) {
    return(
       <ul>
           {props.characters.map(character => (
               <>
               <li>{character.name}</li>
               </>
           ))}
       </ul>
    )
}
     

export default Characters
