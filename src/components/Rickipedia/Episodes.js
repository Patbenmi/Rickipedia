import React from 'react';
import '../../../src/App.css'
import { Link } from 'react-router-dom'
import Episode from './Episode'

function Episodes(props) {
    console.log(props)
    return(
        <div>
            {props.episodes.map((episode, index) => (
                <>
                <li key={index}><Link to={`/episode/${index}`}>{episode.name} - {episode.episode}</Link></li>
                <hr></hr>
                </>
            ))}
        </div>
    )
}

export default Episodes
