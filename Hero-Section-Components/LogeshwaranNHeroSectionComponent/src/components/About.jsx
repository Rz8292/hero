import React from "react";
import './style1.css';
import about from '../assets/about.jpg';

const About = () => {
    return(
        <div className="About">
            <div className="about-div">
            <h1>About Us</h1>
            <p>Founded in 2020, LH Solutions has grown from a small startup to a global player in the IT industry. 
                With a presence in over 10 countries, we have successfully completed more than 500 projects, consistently delivering excellence to our clients.
            </p>
            <p>Our team comprises seasoned IT professionals, software developers, cybersecurity experts, and project managers. 
                Leading the team is our CEO, Jane Doe, who has over 20 years of experience in the IT industry.
                Our CTO, John Smith, specializes in cloud solutions and AI-driven applications.
            </p>
            </div>
            <img src={about} alt="about"/>
        </div>
    )
}

export default About;