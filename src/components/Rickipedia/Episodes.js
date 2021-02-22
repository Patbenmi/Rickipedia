import React from 'react';
import '../../../src/App.css'
import { Link } from 'react-router-dom'

function Episodes(props) {
    console.log(props)
    return(
        <div>
            {props.episodes.map(episode => (
                <>
                <p>{episode.date}</p>
                <p>{episode.episode}</p>
                <p>{episode.link}</p>
                <p>{episode.name}</p>
                <p>{episode.synopsis}</p>
                {/* {episode.characters.map(character => (
                    <p>{character}</p>
                ))} */}
                </>
            ))}
        </div>
    )
}

export default Episodes
