import "./FooterStyles.css";
import { FaHome, FaMailBulk, FaPhone, FaBookOpen, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-container">
                <div class="left">
                    <div class="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <p>Podanur, Coimbatore, Tamilnadu - 641023</p>
                    </div>
                    <div class="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            9080867217</h4>
                    </div>
                    <div className="mail">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            hansrohit031@gmail.com</h4>
                    </div>
                </div>
                <div class="right">
                    <h4><FaBookOpen size={20} style={{ color: "#fff", marginRight: "1rem" }} />Skills</h4>
                    <p><ul> <li>Html, Css, JavaScript(React).</li>
                        <li>C, Java, Python, Flutter& Dart.</li>
                        <li>MySQL, MongoDb.</li></ul>
                    </p>
                    <div className="social">
                        <NavLink to="https://www.instagram.com/"><FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} /></NavLink>
                        <NavLink to="https://github.com/hansrohit"><FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} /></NavLink>
                        <NavLink to="https://www.linkedin.com/in/hans-rohit-y-892360277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuMuEeThxSPu1Wfgqfzlv4Q%3D%3D"><FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer