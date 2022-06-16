import React from "react";
import FooterImg from "../../assets/images/main_logo.png";
import twitterIcon from "../../assets/images/twitter_icon.png";
import facebookIcon from "../../assets/images/facebook_icon.png";
import linkdlnIcon from "../../assets/images/linkdln_icon.png";
import * as Scroll from 'react-scroll';
import './Footer.css';

let Link = Scroll.Link;

const Footer = () => {
    return (
        <div className="footer_main">
            <div className="footer_text">
                <img src={FooterImg} alt='footer' />
                <p>I’ve been lucky enough to have participated in many collaborative projects,
                    as well as exhibiting in a solo capacity, which has solidified my reputation in the art world.
                    If you would like to find out more about my process, get in touch.</p>
                <div className="web_view">
                <ul>
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={'li_link'}
                            activeClass='li_link'
                        > Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="bio"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={'li_link'}
                            activeClass='li_link'
                        > Bio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="benefits"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={'li_link'}
                            activeClass='li_link'
                        > Benefits
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={'li_link'}
                            activeClass='li_link'
                        > Contact
                        </Link>
                    </li>

                </ul>
                </div>
                <div className="mob_view">
                <ul>
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={'li_link'}
                            activeClass='li_link'
                        > Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="bio1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={'li_link'}
                            activeClass='li_link'
                        > Bio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="benefits1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={'li_link'}
                            activeClass='li_link'
                        > Benefits
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={'li_link'}
                            activeClass='li_link'
                        > Contact
                        </Link>
                    </li>

                </ul>
                </div>
                
                <div>
                    <h5>Social Connect</h5>
                    <div className="text-center">
                        <img className={'footer_icon'} src={facebookIcon} alt='facebook' />
                        <img className={'footer_icon'} src={twitterIcon} alt='facebook' />
                        <img className={'footer_icon'} src={linkdlnIcon} alt='facebook' />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>©2022 by Elastic Waves Art. Proudly created with Wix.com</p>
            </div>
        </div>
    )
}

export default Footer;