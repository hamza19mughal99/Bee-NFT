import React from "react";
import Header from "../../Components/Header/Header";
import Welcome from "../Welcome/Welcome";
import Bio from "../Bio/Bio";
import Benefit from "../Benefit/Benefit";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import InstaIcon from "../../assets/images/instagram_icon.png";
import emailIcon from "../../assets/images/email_icon.png";
import './Home.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import ImgBg from "../../assets/images/06.jpg"
import { Element } from 'react-scroll'

const Home = () => {

    return (
        <>
            <div className="web_view">
                <div className='image1'>
                    <div className='top_header'>
                        <div className='container'>
                            <p>
                                <span><img src={InstaIcon} alt='insta' className='mr-3 insta' /></span>
                                |
                                <span><img src={emailIcon} alt='email' className='mx-3 email' /></span>
                                aysemelisolcay@gmail.com
                            </p>
                        </div>
                    </div>

                    <Header />

                    <Element id='home' name='home'>
                        <Welcome />
                    </Element>

                </div>

                <ParallaxBanner
                    layers={[
                        {
                            image: ImgBg,
                            speed: -100,
                        },
                    ]}
                >
                    <Element id='bio' name='bio'>
                        <Bio />
                    </Element>
                    <Element id='benefits' name='benefits'>
                        <Benefit />
                    </Element>
                    <Element id='contact' name='contact'>
                        <Contact />
                    </Element>

                    <div>
                        <Footer />
                    </div>

                </ParallaxBanner>
            </div>

            <div className="mob_view">

                <div className='image1'>
                    <div className='top_header'>
                        <div className='container'>
                            <p>
                                <span><img src={InstaIcon} alt='insta' className='mr-3 insta' /></span>
                                |
                                <span><img src={emailIcon} alt='email' className='mx-3 email' /></span>
                                aysemelisolcay@gmail.com
                            </p>
                        </div>
                    </div>

                    <Header />

                    <Element id='home1' name='home1'>
                        <Welcome />
                    </Element>



                    <Element id='bio1' name='bio1'>
                        <Bio />
                    </Element>
                    <Element id='benefits1' name='benefits1'>
                        <Benefit />
                    </Element>
                    <Element id='contact1' name='contact1'>
                        <Contact />
                    </Element>

                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;