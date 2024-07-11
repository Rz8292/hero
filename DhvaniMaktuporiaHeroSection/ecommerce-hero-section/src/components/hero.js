import React from 'react';
import HeroCarousel from './heroComponents/HeroCarousel';
import './hero.css'; 

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='carousel-section'>
                <HeroCarousel />
            </div>
            <div className='cards-section'>
                <div className='top-card'>
                    <h4>SUMMER SALES</h4>
                    <h2>New Google Pixel 6 Pro</h2>
                    <p>29% OFF</p>
                    <button>SHOP NOW
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </div>
                <div className='bottom-card'>
                    <h4>Xiaomi FlipBuds Pro</h4>
                    <h2>$299 USD</h2>
                    <button>SHOP NOW
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
