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
import { Element } from 'react-scroll'
import PieceArt from "../PieceArt/PieceArt";
import Diversity from "../Diversity/Diversity";
import Utilities from "../Utilities/Utilities";
import Points from "../Points/Points";
import FooterBee from "../FooterBee/FooterBee";
import Collection from "../Collection/Collection";

const Home = () => {

    return (
        <React.Fragment>
            <div className='top_header'>
                <div className='container'>
                    <p>
                        <span><img src={InstaIcon} alt='insta' className='insta' /></span>
                        |
                        <span><img src={emailIcon} alt='email' className='mx-2 email' /></span>
                        aysemelisolcay@gmail.com
                    </p>
                </div>
            </div>
            <div>
                <Header />
                <Element id='home' name='home'>
                    <Welcome />
                </Element>
                <Element id='bio' name='bio'>
                    <Bio />
                </Element>
                <PieceArt />
                <Collection />
                <Element id='benefits' name='benefits'>
                    <Benefit />
                </Element>

                <Diversity />
                <Utilities />
                <Points />
                <FooterBee />

                <Element id='contact' name='contact'>
                    <Contact />
                </Element>
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default Home;