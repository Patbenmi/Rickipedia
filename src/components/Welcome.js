import React from 'react';

const Welcome = () => {
    return (
        <div className="welcomePage">
            <div className="welcomeHeader">
                <h1 className="ab1">Rickipedia</h1>
                <h4 className="ab2">and</h4>
                <h1 className="ab1">Mortiverse</h1>
                <img className="welcomeImage" src="https://wallpaperaccess.com/full/637645.jpg"></img>
            </div>
            <div className="sectionOne">
                <button className="charBtn" type="button">Characters</button>
                <button className="epBtn" type="button">Episodes</button>
                <button className="loBtn" type="button">Locations</button>
                <button className="aboutBtn" type="button">About</button>
            </div>
        </div>
    );
}

export default Welcome;