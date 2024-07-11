import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo.PNG';
import SignIn from '../navbarComponents/signin-form';
import './middleNavbar.css';

function MiddleNavbar() {
    const [showSignIn, setShowSignIn] = useState(false);

    const handleProfileClick = () => {
        setShowSignIn(true);
    };

    const handleClose = () => {
        setShowSignIn(false);
    };
    return (
        <>
            <Container fluid className='middle-navbar-container'>
                <Row>
                    {/* Logo column */}
                    <Col className='logo-container'>
                        <img src={Logo} alt='can not load image' className='logo-middle-navbar'/>
                        <span className='logo-text'>CLICON</span>
                    </Col>

                    {/* Search Bar */}
                    <Col>
                        <Form className='search-form'>
                            <Row>
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search Here..."
                                className="mr-sm-2 search-textbox"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button className='search-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                    </svg>
                                </Button>
                            </Col>
                            </Row>
                        </Form>
                    </Col>

                    {/* icons */}
                    <Col>
                        <div className='icon-container'>
                            {/* Cart icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart icon" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                            <div className='cart-count'>2</div>
                            {/* Fav icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill icon" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                            </svg>
                            {/* Profile icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle icon" viewBox="0 0 16 16" onClick={handleProfileClick}>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                            <SignIn show={showSignIn} onClose={handleClose} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MiddleNavbar;
