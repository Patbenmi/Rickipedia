import React from 'react'
import { Link } from 'react-router-dom'

function Episode(props) {
  return (
    <div>
      <a href={props.episodes[props.match.params.id].link} target='_blank' rel="noopener noreferrer"><h1>{props.episodes[props.match.params.id].name}</h1></a>
      <p>{props.episodes[props.match.params.id].episode}</p>
      <p>Aired on: <b>{props.episodes[props.match.params.id].date}</b></p>
      <p>{props.episodes[props.match.params.id].synopsis}</p>
      <>
        <Link classname="backtoepisodes" to='/episodes'  >Back To Episodes</Link>
      </>
    </div>
  )
}

export default Episode