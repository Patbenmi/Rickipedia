import React from 'react';

function Episodes(props) {
    return(
        <div>
            {props.episodes.map((episode, i) => {
                return (
                    <li>
                        <h1>{episode.name}</h1>
                        <p>{episode.episode}</p>
                        <p>Air Date: {episode.date}</p>
                        <h3>{episode.synopsis}</h3>
                        <h4>Read full plot <a href={episode.link} target="_blank">here.</a></h4>
                    </li>
                )
            })}
        </div>
    )
}

export default Episodes
