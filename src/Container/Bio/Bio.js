import React, { useEffect } from "react";
import BioImg1 from "../../assets/images/nft8.png";
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
                onLeave: () => ScrollTrigger.clearScrollMemory()
            }
        })
            .to(".box-c", {
                opacity: 1,
                duration: 0.5
            })
    }, [])

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".box-d",
                pin: true,
                start: "center center",
                end: "+=600",
                onLeave: () => ScrollTrigger.clearScrollMemory()
            }
        })
            .to(".box-d", {
                opacity: 1,
                duration: 0.5
            })
    }, [])

    return (
        <div className="container bio_main" id="drop-info">

            <div>
                <img src={BioImg1} alt='bio-img' className="bio_img1" />
            </div>

            <div>
                <div className="col-md-12" >
                    <div className="bio_text">
                        <div className="box-c">
                            <div className="welcome_benefit_head">
                                <h1> “ THE <span> ARTIST </span> ” </h1>
                            </div>
                            <p>Melis Olcay is a Turkish artist from Istanbul. Although she has always had an immense
                                interest in art, her artistic journey didn’t start until 2020.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 bio_second_text" >
                    <div className="bio_text1">
                        <div className="box-d">
                            <p>Within these short years, she has individually crafted thousands of art pieces. Her talents,
                                and aspirations bloomed into a form of self-expression. </p>
                            <button className="get_touch_btn" >Learn More</button>
                        </div>
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