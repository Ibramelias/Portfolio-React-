import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/Contact.css"

function Contact() {

    let [name, setName] = useState();
    let [mail, setMail] = useState();
    let [massage, setMassage] = useState();


    // handleInputForm = (e) => {


    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank You")
       
    }


    return (
        <div className="container contact-form">
            <form onSubmit={handleSubmit}>
                <p className="finalmsg">Please do not hesitate to send me a message here, or via <a href="https://linkedin.com/in/ibram-elias-b0018148">linkedin!</a></p>
                <div className="form-group">
                    <label className="title" for="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label className="title" for="fullname">E-mail</label>
                    <input type="text" className="form-control" id="email" placeholder="Your E-mail" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                    <div className="form-group">
                        <label className="title" for="textarea">Massages </label>
                        <textarea className="form-control" id="textarea" placeholder="Your Massage" value={massage} onChange={(e) => setMassage(e.target.valie)}></textarea>
                    </div>
                    <button type="submit" id="submitBtn" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}


export default Contact;