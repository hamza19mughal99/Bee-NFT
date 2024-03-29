import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/main_logo.png";
import * as Scroll from 'react-scroll';
import './Header.css';
let Link = Scroll.Link;

const Header = () => {

    return (
        <header className="header-section is-sticky">
            <Navbar expand="lg">
                <Container style={{ width: '90%' }}>
                    <Navbar.Brand href="#home"><img src={Logo} alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="mr-auto">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={'nav-link'}
                                activeClass='nav-link'
                            >
                                Home
                            </Link>
                            <Link
                                to="bio"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={'nav-link'}
                                activeClass='nav-link'
                            >
                                Bio
                            </Link>
                            <Link
                                to="benefits"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={'nav-link'}
                                activeClass='nav-link'
                            >
                                Benefits
                            </Link>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={'nav-link'}
                                activeClass='nav-link'
                            >
                                Contact
                            </Link>
                            <button className='get_touch_btn'>GET IN TOUCH</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
export default Header;