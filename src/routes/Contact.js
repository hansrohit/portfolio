import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Form from "../components/Form.js";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 head="CONTACT." val="Let's have a chat!" />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact
