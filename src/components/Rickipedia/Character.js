import React from 'react'
import { Link } from 'react-router-dom'

function Character(props) {
  console.log(props)
  return(
    <div>
        <img src={props.characters[props.match.params.id].image}></img>
        <h1>{props.characters[props.match.params.id].name}</h1>
        <p>Species: {props.characters[props.match.params.id].species}</p>
        <p>Origin: {props.characters[props.match.params.id].origin}</p>
        <p>Status: {props.characters[props.match.params.id].status}</p>
    </div>
  )
}

export default Character