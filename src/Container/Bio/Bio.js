import React, { useEffect, useRef } from "react";
import BioImg1 from "../../assets/images/1.png";
import BioImg2 from "../../assets/images/3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Bio.css";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Bio = () => {
    AOS.init();

    useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: ".box-c",
                pin: true,
                start: "center center",
                end: "+=600",
            }
        })
        .to(".box-c",{
            opacity: 1,
            duration: 0.5
        })
    })

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".box-d",
                pin: true,
                start: "center center",
                end: "+=600",
            }
        })
        .to(".box-d",{
            opacity: 1,
            duration: 0.5
        })
    })


    return (
        <div className="container bio_main" id="drop-info">
            {/* <Parallax translateY={[-20, 10]}> */}
            <img src={BioImg1} alt='bio-img' className="bio_img1" />
            {/* </Parallax> */}
            {/* data-aos="zoom-in" data-aos-offset="550"
                    data-aos-easing="ease-in-sine" */}
            <div>
                <div className="col-md-12" >
                    {/* <Parallax speed={-20}> */}
                    <div className="bio_text box-c">
                        <h1>ARTIST BIO</h1>
                        <p>Melis Olcay is a Turkish artist from Istanbul, Turkey.
                            Although she always had an immense interest in art, her artistic journey didn’t
                            start until 2020, also known as the peak of the COVID-19 pandemic. </p>
                    </div>
                    {/* </Parallax> */}
                </div>
                <div className="col-md-12 bio_second_text" >
                    {/* <Parallax speed={-20}> */}
                    <div className="bio_text1">
                        <p className="box-d">What started as an interest to avoid the stagnation introduced to her life later
                            turned into an intense desire to create art.
                            This desire later became a passion for creating digital multimedia pieces. </p>
                    </div>
                    {/* </Parallax> */}
                </div>
            </div>
            {/* <Parallax translateY={[-20, 10]}> */}
            <img src={BioImg2} alt='bio-img' className="bio_img2" />
            {/* </Parallax> */}
        </div>
    )
}
export default Bio;