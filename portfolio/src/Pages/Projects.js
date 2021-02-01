import React from "react";
import Planner from "../Components/img/work-day.png"
import Quiz from "../Components/img/codeQuiz.png"
import Covid from "../Components/img/Covid.png"
import Note from "../Components/img/NoteTaker.png"
import Weather from "../Components/img/WeatherDash.png"
import PG from "../Components/img/PSGen.png"
import "../styles/projects.css"


function Project() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 : day">
                        <h2>Day Planner</h2>
                        <img className="img-fluid" src={Planner} alt="pic1"></img>
                        <div className="body">
                            <p>Is a simple daily schedule application built around the workday hours of 9AM
                            - 5PM. Keep track of important todos, or manage your own meeting schedules.</p>
                        </div>
                        <div className="cta"><a href="https://ibramelias.github.io/DayPlanner/">Check it out!</a></div>
                    </div>
                    <div className="col-md-3 : day">
                        <h2>Code Quiz</h2>
                        <img className="img-fluid" src={Quiz} alt="pic2"></img>
                        <div className="body">
                            <p>This quiz tests the user's knowledge on JavaScript programming. Make a selection by
                            clicking on the button that contains the correct answer! The timer allows for 5 seconds for
                            every question. A wrong answer will decrease 2 seconds from the timer.
                        </p>
                        </div>
                        <div className="cta"><a href="https://ibramelias.github.io/CodeQuiz-/">Check it out!</a></div>
                    </div>
                    <div className="col-md-3 : day">
                        <h2>COVID Testing</h2>
                        <img className="img-fluid" src={Covid} alt="pic3"></img>
                        <div className="body">
                            <p>This application allows the user to find available COVID Testing Sites near their
                            location. The user can choose any location by clicking the "Select" button next to the prefered
                            testing site and display a new map for the selected location. There is an option for the user to
                            clear local storage at any time!</p>
                        </div>
                        <div className="cta"><a href="https://ibramelias.github.io/covid-locator/">Check it out!</a></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 : day">
                        <h2>Note Taker</h2>
                        <img className="img-fluid" src={Note} alt="pic4"></img>
                        <div className="body">
                            <p>Store your ideas using express.js <br></br>An application allows a user to enter, save and
                        delete notes.
                    </p>
                        </div>
                        <div className="cta"><a href="https://note-taker-cbc1.herokuapp.com">Check it out!</a></div>
                    </div>
                    <div className="col-md-3 : day">
                        <h2>Weather Dashboard</h2>
                        <img className="img-fluid" src={Weather} alt="pic5"></img>
                        <div className="body">
                            <p>The Weather-Dash application provides a quick and minimal UI in which users can
                            select a city and view the weather conditions for the current day as well as a 5 day forecast.
                            </p>
                        </div>
                        <div className="cta"><a href="https://ibramelias.github.io/WeatherDash/">Check it out!</a></div>
                    </div>
                    <div className="col-md-3 : day">
                        <h2>PsGenerator</h2>
                        <img className="img-fluid" src={PG} alt="pic6"></img>
                        <div className="body">
                            <p>This application creates a password based upon user selected input.<br></br>Click "Generate Password"
                                nd then using the supplied prompts, indicate what components you would like your password to
                                consist of. 
                             </p>
                        </div>
                        <div className="cta"><a href="https://ibramelias.github.io/PwGenerator/">Check it out!</a></div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Project;