import React from "react";
import { Carousel } from 'react-responsive-carousel';
import CarouselValues from "../heroComponents/hero-values";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import './HeroCarousel.css'; // Import your custom CSS

const HeroCarousel = () => {
    return (
        <div className="hero-carousel">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showArrows={true}
                showStatus={true}
            >
                {CarouselValues.map((value, index) => (
                    <div key={index} className="carousel-item" style={{backgroundColor: value.bgColor}}>
                        <div className="text-section">
                            <h6>{value.tag}</h6>
                            <h1>{value.title}</h1>
                            <p>{value.desc}</p>
                            <button>{value.btn}</button>
                        </div>
                        <div className="image-section">
                            <img src={value.img} alt={value.title} />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default HeroCarousel;
