import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import { useMediaQuery } from 'react-responsive';
import Welcome from "./Welcome";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import logo from '../assets/logo.png';

const Home = () => {
    const link = useNavigate();
    const isDesktop = useMediaQuery({minWidth : 990});
    const [isOpen, setOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const nextTo = () =>{
        link("/career");
    }

    return(
        <div className="Home">
            <section id="home">
            <header>
                <nav>
                    <img src={logo} alt="LH SOLUTIONS"/>
                    <div className="nav-div">
                        {isDesktop? (
                            <>
                                <ul>
                                    <li onClick={()=>scrollToSection('home')}>Home</li>
                                    <li onClick={()=>scrollToSection('about')}>About</li>
                                    <li onClick={()=>scrollToSection('services')}>Services</li>
                                    <li onClick={nextTo}>Careers</li>
                                    <li onClick={()=>scrollToSection('contact')}>Contact</li>
                                </ul>
                            </>
                        ):(
                            <>
                                {isOpen ? (
                                    <>
                                        <div className={`nav-div-mob ${isOpen ? 'open' : ''}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={30} width={30} onClick={()=>setOpen(false)}>
                                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                            </svg>
                                            <ul>
                                                <li onClick={()=>{scrollToSection('home'); setOpen(false);}}>Home</li>
                                                <li onClick={()=>{scrollToSection('about'); setOpen(false);}}>About</li>
                                                <li onClick={()=>{scrollToSection('services'); setOpen(false);}}>Services</li>
                                                <li onClick={()=>{link("/career"); setOpen(false);}}>Careers</li>
                                                <li onClick={()=>{scrollToSection('contact'); setOpen(false);}}>Contact</li>
                                            </ul>
                                        </div>
                                    </>
                                ):(
                                    <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={30} width={30} onClick={()=>setOpen(true)}>
                                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                                    </svg>
                                </>
                                )}
                            </>     
                        )}
                        
                    </div>
                </nav>
            </header>
            </section>
            <section id='welcome'><Welcome/></section>
            <section id='about'><About/></section>
            <section id='services'><Services/></section>
            <section id='contact'><Contact/></section>
        </div>
    )
}

export default Home;