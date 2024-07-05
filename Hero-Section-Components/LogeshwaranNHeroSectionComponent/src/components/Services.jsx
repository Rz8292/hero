import React from "react";
import cons from '../assets/cons.png';
import cloud from '../assets/cloud-storage.png';
import cyber from '../assets/cyber.png';
import sale from '../assets/Sale.png';

const Services = () => {
    return(
        <div className="services">
            <h2>Services</h2>
            <div className="service-div">
                <div className="div1">
                    <div className="img-div">
                        <img src={cons} alt="cons"/>
                    </div>
                    <div className="div1-text">
                        <h4>IT Consulting</h4>
                        <p>Our IT consulting services are designed to help businesses develop robust IT strategies, optimize processes, and implement scalable solutions. We provide comprehensive assessments, strategic planning, and seamless implementation to ensure your IT infrastructure aligns with your business goals.</p>
                    </div>
                </div>
                <div className="div2">
                    <div className="img-div">
                        <img src={sale} alt="cons"/>
                    </div>
                    <div className="div1-text">
                        <h4>Software Development</h4>
                        <p>
                        We offer custom software development services tailored to your unique needs. From mobile applications to enterprise software, our developers use the latest technologies to create high-performance, user-friendly solutions.
                        </p>
                    </div>
                </div>
                <div className="div3">
                    <div className="img-div">
                        <img src={cyber} alt="cons"/>
                    </div>
                    <div className="div1-text">
                        <h4>Cybersecurity</h4>
                        <p>Protect your business with our top-tier cybersecurity services. We offer risk assessments, threat management, and compliance services to safeguard your data and IT infrastructure from evolving cyber threats.</p>
                    </div>
                </div>
                <div className="div4">
                    <div className="img-div">
                        <img src={cloud} alt="cons"/>
                    </div>
                    <div className="div1-text">
                    <h4>Cloud Solutions</h4>
                    <p>Leverage the power of the cloud with our cloud migration and management services. We specialize in AWS, Azure, and Google Cloud, ensuring smooth transitions and optimal performance for your cloud-based applications.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;