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
                <li key={index}><Link to={`/episode/${index}`}>{episode.date}: {episode.episode} - {episode.name}</Link></li>
                </>
            ))}
        </div>
    )
}

export default Episodes
