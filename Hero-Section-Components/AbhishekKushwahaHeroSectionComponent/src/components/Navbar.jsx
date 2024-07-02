import React, { useState } from 'react';
import logo from '../assets/logolight.png'

export default function Navbar() {
    const { pathname } = location;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="shadow-lg w-full" style={{ zIndex: 1000 }}>
            <div className="container mx-auto flex items-center h-16 px-4 md:px-0">
                <a href="/" className="flex items-center justify-center">
                    <img className="h-10" src={logo} alt="Ashura" />
                </a>
                <div className="flex items-center ml-auto md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                        </svg>
                    </button>
                </div>
                <nav className={`fixed top-0 right-0  h-full w-4/5 p-4 flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform md:contents font-semibold text-base lg:text-lg md:static md:flex-row md:bg-transparent md:transform-none`}>
                    <button onClick={closeMenu} className="absolute top-4 right-4  focus:outline-none md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center md:flex-row md:mx-auto">
                        <li className={`p-5 xl:p-5 cursor-pointer `}>
                            <a to="/" onClick={closeMenu}>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-5 cursor-pointer `}>
                            <a to="/" onClick={closeMenu}>
                                <span>About</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-5 cursor-pointer `}>
                            <a to="/" onClick={closeMenu}>
                                <span>Services</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-5 cursor-pointer`}>
                            <a to="/" onClick={closeMenu}>
                                <span>Contact</span>
                            </a>
                        </li>

                    </ul>
                    <div className="flex items-center mt-4 md:mt-0">
                        <button className={`border rounded-full font-bold px-4 py-2 ml-4  cursor-pointer`}>
                            <a to="/talk" onClick={closeMenu}>
                                <span>Let's Talk</span>
                            </a>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}