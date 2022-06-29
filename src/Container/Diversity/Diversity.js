import React from "react";
import diversityImg from "../../assets/images/9.png";
import AOS from 'aos';
import { Parallax } from 'react-scroll-parallax';
import 'aos/dist/aos.css';
import './Diversity.css';

const Diversity = () => {
    AOS.init();
    return (
        <div className="container diversity_main">
            <Parallax translateY={[-20, 10]}>
                <img src={diversityImg} alt='diversity' className="diversity_img" />
            </Parallax>


            <Parallax speed={-30}>
                <div className="row">
                    <div className="col-md-12" data-aos="zoom-in">
                        <div className="diversity">
                            <p>This allows for diversity in texture as well as coloring. For this specific project, I used 35
                                different gel prints. This means that every individual color seen on an NFT was a result of
                                an individual gel print piece. After I have the collage, what starts off as physical turns into multimedia.
                                Once I transfer the collage to digital,
                                I create various forms and shapes to come up with the individual NFTs.</p>
                        </div>
                    </div>
                    <div className="col-md-12" data-aos='zoom-in'>
                        <div className="diversity_text">
                            <p>
                                I believe the actual physical work and the uniqueness of the creation process are what
                                differentiates this project and make it special.</p>
                            <button className='get_touch_btn'>GET IN TOUCH</button>
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    )
}
export default Diversity;