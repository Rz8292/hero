import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import GroceryImg from '../../assets/grocery-image.png';
import MobileImg from '../../assets/mobile-image.png';
import FashionImg from '../../assets/fashion-image.png';
import ElecImg from '../../assets/elec-img.PNG';
import FurnImg from '../../assets/furnit-img.PNG';
import ApplianceImg from '../../assets/appliance-img.PNG';
import ToysImg from '../../assets/toys.PNG';
import './bottomNavbar.css';

function BottomNavbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Container fluid className="bottom-nav-widget">
            <div className="left-section">
                <div className="dropdown-bottom">
                    <button className="dropdown-btn" onClick={toggleMenu}>All Category</button>
                    {showMenu && (
                        <div className="dropdown-menu">
                            <div className="menu-item">
                                <img src={GroceryImg} alt="Grocery" />
                                <span>Grocery</span>
                            </div>
                            <div className="menu-item">
                                <img src={MobileImg} alt="Mobiles" />
                                <span>Mobiles</span>
                            </div>
                            <div className="menu-item">
                                <img src={FashionImg} alt="Fashion" />
                                <span>Fashion</span>
                            </div>
                            <div className="menu-item">
                                <img src={ElecImg} alt="Electronics" />
                                <span>Electronics</span>
                            </div>
                            <div className="menu-item">
                                <img src={FurnImg} alt="Home & Furniture" />
                                <span>Home & Furniture</span>
                            </div>
                            <div className="menu-item">
                                <img src={ApplianceImg} alt="Appliances" />
                                <span>Appliances</span>
                            </div>
                            <div className="menu-item">
                                <img src={ToysImg} alt="Beauty, Toys & More" />
                                <span>Beauty, Toys & More</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-geo-alt bottom-icon" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    <span>Track Order</span>
                </div>
                <div className="icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-clockwise bottom-icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                    </svg>
                    <span>Compare</span>
                </div>
                <div className="icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-headset bottom-icon" viewBox="0 0 16 16">
                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
                    </svg>
                    <span>Customer Support</span>
                </div>
                <div className="icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-info-circle bottom-icon" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                    <span>Need Help</span>
                </div>
            </div>
            <div className="right-section">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-telephone-x bottom-icon" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    <path fillRule="evenodd" d="M11.146 1.646a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708"/>
                </svg>
                <span>+1-202-555-0104</span>
            </div>
        </Container>
    );
}

export default BottomNavbar;
