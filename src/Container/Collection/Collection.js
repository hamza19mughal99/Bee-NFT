import React, { useEffect } from 'react'
import BioImg1 from "../../assets/images/1.png";
import BioImg2 from "../../assets/images/nft9.png";
import "../Bio/Bio.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {

    useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: ".coll1",
                pin: true,
                start: "center center",
                end: "+=600",
                onLeave: () => ScrollTrigger.clearScrollMemory()
            }
        })
            .to(".coll1", {
                opacity: 1,
                duration: 0.5
            })
    }, [])

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".coll2",
                pin: true,
                start: "center center",
                end: "+=600",
                onLeave: () => ScrollTrigger.clearScrollMemory()
            }
        })
            .to(".coll2", {
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
                        <div className="coll1">
                            <div className="welcome_benefit_head">
                                <h1> “ The <span> Elastic Waves </span> <br /> Art  Collection ” </h1>
                            </div>
                            <p>A unique collection of 1234 pieces of phenomenal elasticity, with 1111 available for open
                                mint. </p>
                            <button className='get_touch_btn'>Mint Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 bio_second_text" >
                    <div className="bio_text1">
                        <p className='coll2'>From paint to gel to canvas to digital. Now she shares them with the world.</p>
                    </div>
                </div>
            </div>

            <div>
                <img src={BioImg2} alt='bio-img' className="bio_img2" />
            </div>
        </div>
    )
}

export default Collection