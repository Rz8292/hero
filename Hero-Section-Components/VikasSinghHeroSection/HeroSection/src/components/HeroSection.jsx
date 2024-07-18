import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-top-data">GrapplTech</h1>
          <h2 className="hero-heading ">Grappl & Grow</h2>
          <p className="hero-para">
            GrapplTech is the ultimate platform for students and recent
            graduates to find bootcamps across a wide range of industries. Our
            platform connects aspiring grapplers with top companies, offering
            them invaluable experience, skills, and contacts to jumpstart their
            careers.
          </p>
          <Button className="btn explore-now">Explore Now</Button>
        </div>
        
        <div className="section-hero-image">
          <picture>
            <img src="./src/images/heroimage.png" alt="hero image" className="hero-img"/>
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
padding: 9rem 0;

.section-hero-data{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn{
  max-width: 16rem;
}
.hero-top-data{
  text-transform: uppercase;
  font-weight: 500;
  font-size: 6rem;
  color: black;
  margin-bottom: 0;
}
.hero-heading{
  text-transform: uppercase;
  font-size: 6.4rem;
}
.hero-para{
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
  text-align: justify;
  font-size: 24px;
}
.section-hero-image{
  display: flex;
  justify-content: center;
  align-items: center;
}
picture{
  text-align: center;
}
.hero-img{
  max-width: 80%;
}

`;


const Button = styled.button`
    text-decoration: none;
    max-width: auto;
    background-color: #2B6CB0;
    color: #EBFFFF;
    padding: 16px 32px;
    border-radius: 2px;
    border: none;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    &:hover,
    &:active{
        box-shadow: 0 2rem 2rem 0 #458ad3;
        transform: scale(0.96);
    a{
        text-decoration: none;
        color: rgb(255 255 255);
        font-size: 1.8rem;
    }
    }
`
