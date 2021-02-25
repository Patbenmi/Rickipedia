import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="welcomePage">
            <div className="welcomeHeader">
                <h1 className="ab1">Rickipedia</h1>
                <h4 className="ab2">and</h4>
                <h1 className="ab1">Mortiverse</h1>
                <img className="welcomeImage" src="https://wallpaperaccess.com/full/637645.jpg" alt='RickAndMorty'></img>
            </div>
            <div className="sectionOne">
                <button className="charBtn" type="button"><Link className="homeBtn" to="/characters">{`Characters`}</Link></button>
                <button className="charBtn" type="button"><Link className="homeBtn" to="/episodes">{`Episodes`}</Link></button>
                <button className="charBtn" type="button"><Link className="homeBtn" to="/locations">{`Locations`}</Link></button>
                <button className="charBtn" type="button"><Link className="homeBtn" to="/about">{`About`}</Link></button>
            </div>
        </div>
    );
}

export default Welcome;