import React from "react";
import './style.css';
import Meeting from '../assets/Meeting.png';

const Welcome = () => {
    return(
        <div className="welcome">
            <div className="home-div">
                <img src={Meeting} alt="img" />
                <div className="text-div">
                    <h2>LH Solutions</h2>
                    <p>
                        LH Solutions is a premier IT consulting and services company dedicated to providing cutting-edge technology solutions to businesses worldwide. 
                        Our mission is to drive innovation, streamline operations, and enhance business efficiency through technology.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;