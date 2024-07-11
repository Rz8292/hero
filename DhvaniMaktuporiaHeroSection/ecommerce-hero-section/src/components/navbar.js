import React from 'react';
import TopWidget from './navbarComponents/top-sales-widget.js';
import TopNavbar from './navbarComponents/top-navbar.js';
import MiddleNavbar from './navbarComponents/middle-navbar.js';
import BottomNavbar from './navbarComponents/bottom-navbar.js';
import './navbar.css';

function Navbar() {

    return (
        <>
            {/* Main Container */}
            <div className='main-container'>
                {/* top widget */}
                <TopWidget/>

                {/* second widget */}
                <TopNavbar/>

                {/* middle navbar widget */}
                <MiddleNavbar/>

                {/* bottom navbar widget */}
                <BottomNavbar/>
            </div>
        </>
    );
}

export default Navbar;
