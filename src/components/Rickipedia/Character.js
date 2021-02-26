import React from 'react'

function Character(props) {
  return(
    <div className="charPage">
        <img className="charPic" src={props.characters[props.match.params.id].image} alt='RickAndMorty'></img>
        <h1 className="ab2">{props.characters[props.match.params.id].name}</h1>
        <p>Species: {props.characters[props.match.params.id].species}</p>
        <p>Origin: {props.characters[props.match.params.id].origin}</p>
        <p>Status: {props.characters[props.match.params.id].status}</p>
    </div>
  )
}

export default Character