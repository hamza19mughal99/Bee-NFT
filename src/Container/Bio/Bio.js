import React from "react";
import BioImg1 from "../../assets/images/1.png";
import BioImg2 from "../../assets/images/3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-scroll-parallax';
import "./Bio.css";

const Bio = () => {
    AOS.init();
    return (
        <div className="container bio_main">
            <Parallax translateY={[-20, 10]}>
                <img src={BioImg1} alt='bio-img' className="bio_img1" />
            </Parallax>

            <div className="row">
                <div className="col-md-12" data-aos="zoom-in">
                    <Parallax speed={-20}>
                        <div className="bio_text">
                            <h1>ARTIST BIO</h1>
                            <p>Melis Olcay is a Turkish artist from Istanbul, Turkey.
                                Although she always had an immense interest in art, her artistic journey didn’t
                                start until 2020, also known as the peak of the COVID-19 pandemic. </p>
                        </div>
                    </Parallax>
                </div>
                <div className="col-md-12 bio_second_text" data-aos="fade-right"
                    data-aos-offset="1000"
                    data-aos-easing="ease-in-sine">
                    <Parallax speed={-20}>
                        <div className="bio_text1">
                            <p>What started as an interest to avoid the stagnation introduced to her life later
                                turned into an intense desire to create art.
                                This desire later became a passion for creating digital multimedia pieces. </p>
                        </div>
                    </Parallax>
                </div>
            </div>
            <Parallax translateY={[-20, 10]}>
                <img src={BioImg2} alt='bio-img' className="bio_img2" />
            </Parallax>
        </div>
    )
}
export default Bio;