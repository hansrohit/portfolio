import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import r1 from "../assets/react1.jpg"
import r2 from "../assets/react2.webp"

import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1><br></br>
                <p>I'm Hans Rohit, a software developer specializing in creating front-end websites. I'm a passionate learner with skills in Java, C, HTML, CSS, React.js, MongoDB, MySQL, and Flutter & Dart. I'm eager to prove myself and showcase the work I've accomplished in these areas.
                </p><br></br>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={r1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={r2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
