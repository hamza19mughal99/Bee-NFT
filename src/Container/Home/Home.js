import React from "react";
import Header from "../../Components/Header/Header";
import Welcome from "../Welcome/Welcome";
import Bio from "../Bio/Bio";
import Benefit from "../Benefit/Benefit";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";

import './Home.css';
import { Element } from 'react-scroll'
import PieceArt from "../PieceArt/PieceArt";
import Diversity from "../Diversity/Diversity";
import Utilities from "../Utilities/Utilities";
import Points from "../Points/Points";
import FooterBee from "../FooterBee/FooterBee";

const Home = () => {

    return (
        <React.Fragment>
            {/* <div> */}
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
            <Utilities />
            <Points />
            <FooterBee />

            <Element id='contact' name='contact'>
                <Contact />
            </Element>
            <Footer />
            {/* </div> */}
            {/* <div className="section1" /> */}
        </React.Fragment>
    )
}
export default Home;