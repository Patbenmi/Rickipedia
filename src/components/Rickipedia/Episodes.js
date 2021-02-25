import React from 'react';
import '../../../src/App.css'
import { Link } from 'react-router-dom'

function Episodes(props) {
    console.log(props)
    return (
        <div className="episodesPage">
            <div className="episodesTitle">
                <h1 className="ab1">Episodes</h1>
                <img className="welcomeImage" src="https://media.giphy.com/media/l0MYBQSaLvKxe0G6A/giphy.gif" alt='RickAndMorty'></img>
            </div>
            <div className="episodeList">
                {props.episodes.map((episode, index) => (
                    <>
                        <br></br>
                        <h2 key={index}><Link to={`/episode/${index}`}>{episode.name} - {episode.episode}</Link></h2>
                        <br></br>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Episodes
