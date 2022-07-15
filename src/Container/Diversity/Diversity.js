import React, { useEffect } from "react";
import diversityImg from "../../assets/images/9.png";
import nft4 from "../../assets/images/nft4.png";
import './Diversity.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Diversity = () => {

    useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: ".divi",
                pin: true,
                start: "center center",
                end: "+=600",
                onLeave: () =>ScrollTrigger.clearScrollMemory()
            }
        })
            .to(".divi", {
                opacity: 1,
                duration: 0.5
            })
    },[])

    return (
        <div className="container diversity_main">
            <div>
                <img src={diversityImg} alt='diversity' className="diversity_img" />
            </div>

            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="text-center">
                        <img src={nft4} alt={'bio-img'} className='diver_col_img' />
                    </div>
                </div>
                <div className="col-md-7 give_overflow">
                    <div className="diversity diversity_text">
                        <div className="divi">
                            <p>This allows for diversity in texture as well as coloring. For this specific project, I used 35
                                different gel prints. This means that every individual color seen on an NFT was a result of
                                an individual gel print piece. After I have the collage, what starts off as physical turns into multimedia.
                                Once I transfer the collage to digital,
                                I create various forms and shapes to come up with the individual NFTs.
                            </p>
                            <p>
                                I believe the actual physical work and the uniqueness of the creation process are what
                                differentiates this project and make it special.
                            </p>
                            <button className='get_touch_btn'>GET IN TOUCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Diversity;