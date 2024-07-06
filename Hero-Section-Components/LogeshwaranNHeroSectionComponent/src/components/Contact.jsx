import React from "react";
import './style2.css';
import logo from '../assets/logo1.png';

const Contact = () => {
    return(
        <div className="contact">
            <div className="con-img">
                <img src={logo} alt="logo"/>
                <p>© LH Solutions 2024</p>
            </div>

            <div className="contact-div">
                <label className="heading">Contact US</label>
                <div className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={20} width={20}>
                        <path fill="#ffffff" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                    </svg>
                    <label>careers@lhsolutions.tech</label>
                </div>
                <div className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={20} width={20}>
                        <path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                    <label>+91 9988776655</label>
                </div>
                <div className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={20} width={20}>
                        <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                    <label>LH Solutions</label>
                </div>
            </div>
            <div className="contact-div">
                <label className="heading">Location</label>
                <label>LH Solutions, <br/>123 Tech Lane, Innovation City, CA 94043</label>
            </div>
        </div>
    )
}

export default Contact;