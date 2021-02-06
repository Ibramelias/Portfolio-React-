import React from "react";
import photo from "../Components/img/photo.jpeg"
import "../styles/Home.css"


function Home() {
    return (
        <div>
            <div className="col-md-8">
                <h1 className="name">
                    Hi.. My name is Ibram<br />
                    I'm an aspiring Full Stack Developer.
                </h1>
            </div>
            <div className="container" id="phase1">
                <div className="row">
                    <div className="col-md-4">
                        <img className="myphoto" src={photo} alt="My Photo"></img>
                    </div>
                    <div className="col-md-4">
                        <div className="aboutme">
                            <p>
                                <strong className="am">Who I Am</strong>...Rutgers Alumna, Enthusiastic full stack developer with a
                                solid background in Marketing, located
                                in New Jersey. A highly
                                motivated, fast learner eager to expand my knowledge of the field and contribute in a meaningful
                                way. Great communicator with experience collaborating on a team to creatively. In 2020 I decided
                                to follow my dream with web development. And now making my dream come true.
                            </p>
                        </div>
                    </div>

                    <div className=" col-md-4">
                        <div className="whatIwant">
                            <p>
                                <strong className="am">What I Want</strong> ...
                                looking forward to work with a team of developers to build a solid product. I know that I
                                can be asset to any development team. I hope to check out some of my work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container">
                <div className="row" id="skills">
                    <div className="col-md : front">
                        <p className="fronttitle">Frontend Skills</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java Script</li>
                            <li>Ajax</li>
                            <li>React</li>
                            <li>ReactJs</li>
                        </ul>
                    </div>
                    <div className="col-md : back">
                        <p className="backtitle">Backend Skills</p>
                        <ul>
                            <li>Node</li>
                            <li>MySQL</li>
                            <li>Express</li>
                            <li>Mongodb</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Home;