import { Box, Center, Container, Heading, Image, Stack, Text, color } from '@chakra-ui/react';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../assets/groupVideoCall.jpg'




const Home = () => {
    return (
        <Box>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    backgroundColor: '#f7f7f7',
                }}
            >
                <div
                    style={{
                        maxWidth: '400px',
                        margin: '40px auto',
                        textAlign: 'center',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                            margin: '0 0 10px',
                        }}
                    >
                        Grappl & Grow
                    </h1>
                    <p
                        style={{
                            fontSize: '18px',
                            margin: '0 0 20px',
                        }}
                    >
                        Connect with the tech talent you need, when you need it.
                    </p>
                    <button
                        style={{
                            backgroundColor: '#4CAF50',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Explore Now
                    </button>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >

                    <img
                        src={img1}
                        alt="Grappl & Grow"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>









            <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>






            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '40px'
            }}>
                <div style={{
                    backgroundColor: '#f7f7f7',
                    padding: '20px',
                    margin: '20px',
                    width: '300px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{ fontWeight: 'bold', marginTop: 0 }}>Virtual Mode</h2>
                    <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                        GrapplTech's virtual mode feature allows students and recent graduates to gain valuable
                        experience and skills from the comfort of their own homes, connecting them with top companies
                        and internship opportunities across the world. Join us today to kickstart your career journey, no
                        matter where you are!
                    </p>
                </div>
                <div style={{
                    backgroundColor: '#f7f7f7',
                    padding: '20px',
                    margin: '20px',
                    width: '300px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{ fontWeight: 'bold', marginTop: 0 }}>Grappler Chowdown</h2>
                    <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                        At GrapplTech, we believe in creating a community of top-performing grapplers who are passionate
                        about learning and growing. Rewarding our top 10 grapplers with team lunches to foster a
                        positive team dynamic and celebrate their hard work and dedication. Join us at GrapplTech and
                        strive for excellence!
                    </p>
                </div>
                <div style={{
                    backgroundColor: '#f7f7f7',
                    padding: '20px',
                    margin: '20px',
                    width: '300px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{ fontWeight: 'bold', marginTop: 0 }}>Dedicated Mentor</h2>
                    <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                        GrapplTech's one-to-one mentorship feature connects students and recent graduates with
                        experienced mentors who can provide guidance, support, and valuable industry insights to help them
                        succeed in their chosen career paths. Join us today to unlock the power of mentorship and
                        accelerate your career growth!
                    </p>
                </div>
                <div style={{
                    backgroundColor: '#f7f7f7',
                    padding: '20px',
                    margin: '20px',
                    width: '300px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{ fontWeight: 'bold', marginTop: 0 }}>Client Projects</h2>
                    <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                        GrapplTech's client project feature provides students and recent graduates with the opportunity
                        to work on real-world projects for top companies, gaining hands-on experience and valuable
                        skills to add to their resumes. Join us today to take your bootcamp experience to the next level!
                    </p>
                </div>
            </div>


            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#f5f5f5'
            }}>
                <h1 style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: '#2196f3'
                }}>PixelBrew</h1>
                <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginTop: '20px',
                    marginBottom: '40px'
                }}>Where Coffee Runs and Learning Happens!</div>
                <p style={{
                    fontSize: '16px',
                    color: '#555',
                    lineHeight: '1.5',
                    textAlign: 'center',
                    width: '600px'
                }}>At GrapplTech, we know that coffee runs are an essential part of any bootcamp experience. And while you're sipping on that latte, why not also gain some valuable skills and experience in your chosen industry? We promise we won't judge you if you spill your coffee during a video call with your boss, but we will encourage you to keep learning and growing in your career. Join us today and let's make your coffee-fueled career dreams a reality!</p>
                <button style={{
                    backgroundColor: '#2196f3',
                    color: '#fff',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '40px'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#1976d2'} onMouseOut={(e) => e.target.style.backgroundColor = '#2196f3'}>Apply for a Latte-tude of Opportunities!</button>
            </div>












            <div style={{
                maxWidth: 800,
                margin: '40px auto',
                padding: 20,
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: 10
                }}>Frequently Asked Questions</h2>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>What is GrapplTech?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>How can I find bootcamps on GrapplTech?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>Do I need to pay to use GrapplTech?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>Do I get placement support for bootcamp?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>Who are the clients at GrapplTech?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>Can I get career advice and guidance on GrapplTech?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>Is GrapplTech available globally?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>How can I contact GrapplTech support?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>Do you offer bootcamps in specific industries?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>Can I apply to multiple bootcamps at once?</h3>
                    </li>
                    <li style={{
                        marginBottom: 20
                    }}>
                        <h3 style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#555',
                            marginBottom: 10
                        }}>During the bootcamp, do you allow grapplers to work on real client projects?</h3>
                    </li>
                </ul>
            </div>











        </Box>
    );
};


export default Home;
