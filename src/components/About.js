import React from 'react';

const About = () => {
    return (
        <div className="aboutPage">
            <div className="aboutIntro">
                <h2 className="ab1">Robot: What is my purpose?</h2>
                <h2 className="ab2">Rick: You pass butter</h2>
                <img className="welcomeImage" src="https://media.giphy.com/media/jrijP60lUxjUjpa7YF/giphy.gif" alt='RickAndMorty'></img>
                <hr></hr>
            </div>
            <div className="aboutTeam">
                <h1 className="devTitle">We’re the only friends we’ve got, Morty!</h1>
                <br></br>
                <div className="devInfo">
                    <div className="dev1">
                        <img className="devImage" src={process.env.PUBLIC_URL + "/2.png"} alt='Blake'></img>
                        <h2 className="devText1">Blake DeGraw</h2>
                    </div>
                    <div className="dev2">
                        <img className="devImage" src={process.env.PUBLIC_URL + "/3.png"} alt='Chassity'></img>
                        <h2 className="devText2">Chassity Taitague</h2>
                    </div>
                    <div className="dev3">
                        <img className="devImage" src={process.env.PUBLIC_URL + "/1.png"} alt='Jeremiah'></img>
                        <h2 className="devText1">Jeremiah David</h2>
                    </div>
                    <div className="dev4">
                        <img className="devImage" src={process.env.PUBLIC_URL + "/4.png"} alt='Patrick'></img>
                        <h2 className="devText2">Patrick Nash</h2>
                    </div>
                    <div className="spacer"></div>
                </div>
            </div>
        </div >
    );
}

export default About;