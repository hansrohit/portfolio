import "./FormStyles.css";

import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <label for="name">Name</label>
            <input type="text" name="name" id="name"></input>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email"></input>
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject"></input>
            <label for="message">Message</label>
            <textarea rows={6} placeholder="Type your message here"></textarea>
            <button className="btn">Submit</button>
        </div>
    )
}

export default Form
