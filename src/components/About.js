import React from 'react';

const About = () => {
    return (
        <div className="aboutPage">
            <div className="aboutIntro">
                <h2 className="ab1">Robot: What is my purpose?</h2>
                <h2 className="ab2">Rick: You pass butter</h2>
                <br>
                </br>
                <p>
                    Let's talk about our project!
                </p>
            </div>
            <hr></hr>
            <div className="aboutTeam">
                <h2 className="ab1">We’re the only friends we’ve got, Morty!</h2>
                <img className="welcomeImage" src="https://media.giphy.com/media/jrijP60lUxjUjpa7YF/giphy.gif" alt='RickAndMorty'></img>
                <p>The amazing humans that built this.</p>
            </div>
        </div >
    );
}

export default About;