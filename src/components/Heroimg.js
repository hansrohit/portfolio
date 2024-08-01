import "./HeroimgStyles.css";
// import Introimg from "../assets/intro-img.jpeg"
import Introimg1 from "../assets/portfolio-background.webp"
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
    return (
        <div class="hero">
            <div class="mask">
                <img class="intoimg" src={Introimg1} alt="Introimg" />
            </div>
            <div class="content">
                <p>HI, I'M HANS ROHIT. </p>
                <h1>Software Developer</h1>
                <div>
                    <Link to="/project" class="btn">projects</Link>
                    <Link to="/contact" class="btn btn-light">contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg
