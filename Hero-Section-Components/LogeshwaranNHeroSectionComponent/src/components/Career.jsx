import React from "react";
import logo from '../assets/logo.png';
import './style2.css';
import { useNavigate } from "react-router-dom";

const Career = () => {
    const link = useNavigate();

    const moveTo = () => {
        link('/');
    }

    return(
        <div className="career">
            <div className="nav">
                <div className="img-div" onClick={moveTo}>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <div className="content-div">
                <h3>We're more than a workplace. We're a family.</h3>
                <label>
                    We know that finding a meaningful and rewarding career can be a long journey. 
                    Our goal is to make that process easy for you and to create a work environment that's enriching—one that you'll look forward to every day.
                </label>
            </div>
            <div className="job-div">
                <div className="job-div1">
                    <p>Full time</p>
                    <label>Junior Web Designer</label>
                    <p>Bengaluru</p>
                </div>
                <div className="job-div2">
                    <p>Full time</p>
                    <label>Senior Software Developer</label>
                    <p>Bengaluru</p>
                </div>
                <div className="job-div3">
                    <p>Full time</p>
                    <label>UI/UX Designer</label>
                    <p>Bengaluru</p>
                </div>
                <div className="job-div4"> 
                    <p>Full time</p>
                    <label>Content Writer</label>
                    <p>Bengaluru</p>
                </div>
            </div>
        </div>
    )
}

export default Career;