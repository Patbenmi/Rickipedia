import React from 'react';

const Welcome = () => {
    return (
        <div className="welcomePage">
            <div className="welcomeHeader">
                {/* ADD GIF */}
            </div>
            <hr></hr>
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