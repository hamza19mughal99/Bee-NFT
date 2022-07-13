import React, { useEffect } from "react";
import BioImg1 from "../../assets/images/1.png";
import BioImg2 from "../../assets/images/3.png";
import "./Bio.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bio = () => {

    useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: ".box-c",
                pin: true,
                start: "center center",
                end: "+=600",
            }
        })
            .to(".box-c", {
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
            .to(".box-d", {
                opacity: 1,
                duration: 0.5
            })
    })

    return (
        <div className="container bio_main" id="drop-info">

            <div>
                <img src={BioImg1} alt='bio-img' className="bio_img1" />
            </div>

            <div>
                <div className="col-md-12" >
                    <div className="bio_text">
                        <div className="box-c">
                            <h1>ARTIST BIO</h1>
                            <p>Melis Olcay is a Turkish artist from Istanbul, Turkey.
                                Although she always had an immense interest in art, her artistic journey didn’t
                                start until 2020, also known as the peak of the COVID-19 pandemic. </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 bio_second_text" >
                    <div className="bio_text1">
                        <p className="box-d">What started as an interest to avoid the stagnation introduced to her life later
                            turned into an intense desire to create art.
                            This desire later became a passion for creating digital multimedia pieces. </p>
                    </div>
                </div>
            </div>

            <div>
                <img src={BioImg2} alt='bio-img' className="bio_img2" />
            </div>
        </div>
    )
}
export default Bio;