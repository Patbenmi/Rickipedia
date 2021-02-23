import React from 'react';
import '../../../src/App.css'
import { Link } from 'react-router-dom'

function Episodes(props) {
    console.log(props)
    return(
        <div>
            {props.episodes.map(episode => (
                <>
                <h5>{episode.episode} - {episode.name}</h5>
                {/* <p>{episode.name}</p> */}
                <p>{episode.date}</p>
                <p>{episode.link}</p>
                <p>{episode.synopsis}</p>
                <hr></hr>
                {/* {episode.characters.map(character => (
                    <p>{character}</p>
                ))} */}
                </>
            ))}
        </div>
    )
}

export default Episodes
