import React from 'react'
import { Link } from 'react-router-dom'

function Episode(props) {
  console.log(props)
  return(
    <div>
      <a href={props.episodes[props.match.params.id].link} target='_blank'><h1>{props.episodes[props.match.params.id].name}</h1></a>
      <p>{props.episodes[props.match.params.id].episode}</p>
      <p>{props.episodes[props.match.params.id].date}</p>
      <p>{props.episodes[props.match.params.id].synopsis}</p>
    </div>
  )
}

export default Episode