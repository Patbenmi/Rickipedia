import React from 'react';
import '../../../src/App.css'
import { Link } from 'react-router-dom'
import Episode from './Episode'

function Episodes(props) {
    console.log(props)
    return(
        <div className="episodesPage">
            <div className="episodesTitle">
                <h1>Episodes</h1>
                <br>
                </br>
            </div>
        <div>
            {props.episodes.map((episode, index) => (
                <>
                <li key={index}><Link to={`/episode/${index}`}>{episode.name} - {episode.episode}</Link></li>
                <hr></hr>
                </>
            ))}
        </div>
        </div>
    )
}

export default Episodes
