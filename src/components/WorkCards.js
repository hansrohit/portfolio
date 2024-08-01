import "./WorkCardsStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCards = (props) => {
    return (
        <div className="project-cards">
            <img src={props.imgsrc} alt="Pro1" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                {/* <br></br> */}
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">view</NavLink>
                    <NavLink to={props.source} className="btn">source</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCards 
