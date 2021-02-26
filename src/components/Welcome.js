import React from 'react';
import { Link } from 'react-router-dom'
import Pickle from '../../src/Audio/pickle_rick.mp3'
import Portal from '../../src/Audio/portal.mp3'
import Meeseeks from '../../src/Audio/meeseeks.mp3'
import Deep from '../../src/Audio/deep.mp3'

const Welcome = () => {

    function pickleRick() {
        const audio = new Audio(Pickle)
        audio.play()
    }

    function portal() {
        const audio = new Audio(Portal)
        audio.play()
    }

    function meeseeks() {
        const audio = new Audio(Meeseeks)
        audio.play()
    }

    function deep() {
        const audio = new Audio(Deep)
        audio.play()
    }

    return (
        <div className="welcomePage">
            <div className="welcomeHeader">
                <h1 className="ab1">Rickipedia</h1>
                <h4 className="ab2">and</h4>
                <h1 className="ab1">Mortiverse</h1>
                <img className="welcomeImage" src="https://wallpaperaccess.com/full/637645.jpg" alt='RickAndMorty'></img>
            </div>
            <div className="sectionOne">
                <button className="charBtn" type="button"><Link onClick={pickleRick} className="homeBtn" to="/characters">{`Characters`}</Link></button>
                <button className="charBtn" type="button"><Link onClick={meeseeks} className="homeBtn" to="/episodes">{`Episodes`}</Link></button>
                <button className="charBtn" type="button"><Link onClick={portal} className="homeBtn" to="/locations">{`Locations`}</Link></button>
                <button className="charBtn" type="button"><Link onClick={deep} className="homeBtn" to="/about">{`About`}</Link></button>
            </div>
        </div>
    );
}

export default Welcome;