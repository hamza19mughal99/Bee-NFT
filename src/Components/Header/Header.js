import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/main_logo.png";
import * as Scroll from 'react-scroll';
import InstaIcon from "../../assets/images/instagram_icon.png";
import emailIcon from "../../assets/images/email_icon.png";
import './Header.css';
let Link = Scroll.Link;

const Header = () => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 0 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    return (
        <header className="header-section">
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