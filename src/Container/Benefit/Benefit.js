import React, { useEffect } from "react";
import BenefitImg from "../../assets/images/3.png";
import benefitMain from "../../assets/images/nft3.png";
import BioImg1 from "../../assets/images/1.png";
import "./Benefit.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefit = () => {
    useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: ".bene_head",
                pin: true,
                start: "center center",
                end: "+=600",
            }
        })
            .to(".bene_head", {
                opacity: 1,
                duration: 0.5
            })

        gsap.timeline({
            scrollTrigger: {
                trigger: ".bene",
                pin: true,
                start: "center center",
                end: "+=600",
            }
        })
            .to(".bene", {
                opacity: 1,
                duration: 0.5
            })
    })

    return (
        <div className="benefit_main">
            <div className="welcome_benefit_head">
                <h1 className="bene_head">“ <span>Welcome</span> to <br />
                    Elastic Waves <span>Art</span>”</h1>
            </div>

            <div style={{zIndex: '2'}}>
                <img src={BioImg1} alt='bio-img' className="benefit_img1" />
            </div>

            <div style={{zIndex: '2'}}>
                <img src={BenefitImg} alt='benefit' className="benefit_img" />
            </div>

            <div className="container benefit">
                <div className="row align-items-center">
                    <div className="col-md-7" >
                        <div className="benefit_text bene">
                            <h1>THE COLLECTION</h1>
                            <p> The Elastic Waves Collection is very special to me because of its unique creation process.
                                These art pieces go through a multi-step process. They have painting, gel printing, cutting,
                                collaging, distortion, and many various other steps in their making. </p>
                            <p>
                                I start off with painting on a physical gel medium and taking prints of those paintings.
                                Later, once I have enough paintings,
                                I cut those paintings into various forms to form a collage of them.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="text-center">
                            <img src={benefitMain} alt={'bio-img'} className='bio_last_img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit;