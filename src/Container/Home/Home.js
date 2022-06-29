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
import ImgBg from "../../assets/images/final_bg.png";
import { Element } from 'react-scroll'
// import MainBg from "../../assets/images/main_bg.jpg";
import WaterWave from 'react-water-wave';
import PieceArt from "../PieceArt/PieceArt";
import Diversity from "../Diversity/Diversity";
import Utilities from "../Utilities/Utilities";
import Points from "../Points/Points";
import FooterBee from "../FooterBee/FooterBee";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

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
            {/* <WaterWave
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
                </WaterWave> */}

            {/* -------------------------------- parallax --------------------------- */}

            {/* <ParallaxBanner
                layers={[
                    {
                        image: ImgBg,
                        speed: -100,
                        scale: [1, 1.2],
                    },
                ]}
            >
                <Header />
                <Element id='home' name='home'>
                    <Welcome />
                </Element>
            </ParallaxBanner>
            <ParallaxBanner
                layers={[
                    {
                        image: ImgBg,
                        speed: -100,
                        scale: [1, 1.2],
                    },
                ]}
            >
                <Element id='bio' name='bio'>
                    <Bio />
                </Element>

            </ParallaxBanner>

            <ParallaxBanner
                layers={[
                    {
                        image: ImgBg,
                        speed: -100,
                        scale: [1, 1.2],
                    },
                ]}
            >
                <PieceArt />
                <Element id='benefits' name='benefits'>
                    <Benefit />
                </Element>

            </ParallaxBanner>

            <ParallaxBanner
                layers={[
                    {
                        image: ImgBg,
                        speed: -100,
                        amount: 0.1
                        // scale: [1, 1.2],
                    },
                ]}
            >
                <Diversity />
                <Utilities />
                
            </ParallaxBanner>
            <ParallaxBanner
                layers={[
                    {
                        image: ImgBg,
                        speed: -100,
                        amount: 0.1
                        // scale: [1, 1.2],
                    },
                ]}
            >
                <Points />
                <Utilities />
                
            </ParallaxBanner>
            
            <div className="section1">
                <FooterBee />
                <Element id='contact' name='contact'>
                    <Contact />
                </Element>
                <Footer />
            </div> */}



            <ParallaxBanner
            layers={[
                { image: ImgBg, speed: -200 },
              ]}
            >
            <div className="section1">
                <Header />
                <Element id='home' name='home'>
                    <Welcome />
                </Element>
                <Element id='bio' name='bio'>
                    <Bio />
                </Element>
                <PieceArt />
                <Element id='benefits' name='benefits'>
                    <Benefit />
                </Element>
                <Diversity />
                {/* <Utilities />
                <Points /> */}

                <FooterBee />
                <Element id='contact' name='contact'>
                    <Contact />
                </Element>
                <Footer />
            </div>
            </ParallaxBanner>
        </>
    )
}
export default Home;