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
// import { ParallaxBanner } from 'react-scroll-parallax';
// import ImgBg from "../../assets/images/06.jpg"
import { Element } from 'react-scroll'
import MainBg from "../../assets/images/main_bg.jpg";
import WaterWave from 'react-water-wave';

const Home = () => {

    return (
        <>
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
                <WaterWave
                    className='image1'
                    imageUrl={MainBg}
                    perturbance={0.01}
                    dropRadius={80}
                    interactive={true}
                >
                    {methods => (
                        <div>
                            <Header />

                            <Element id='home' name='home'>
                                <Welcome />
                            </Element>

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

                        </div>
                    )}
                </WaterWave>
        </>
    )
}
export default Home;