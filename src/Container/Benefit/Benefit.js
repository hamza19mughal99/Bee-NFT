import React, { useEffect } from "react";
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
                trigger: ".bene",
                pin: true,
                start: "center center",
                end: "+=600",
                onLeave: () => ScrollTrigger.clearScrollMemory()
            }
        })
            .to(".bene", {
                opacity: 1,
                duration: 0.5
            })

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".bene2",
                    pin: true,
                    start: "center center",
                    end: "+=600",
                    onLeave: () => ScrollTrigger.clearScrollMemory()
                }
            })
                .to(".bene2", {
                    opacity: 1,
                    duration: 0.5
                })
    }, [])

    return (
        <React.Fragment>
            <div className="web">
                <div className="benefit_main">
                    <div style={{ zIndex: '2' }}>
                        <img src={BioImg1} alt='bio-img' className="benefit_img1" />
                    </div>

                    <div className="container benefit">
                        <div className="row align-items-center bene">
                            <div className="col-md-7" >
                                <div className="benefit_text">
                                    <div>
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
                            </div>
                            <div className="col-md-5">
                                <div className="text-center">
                                    <img src={benefitMain} alt={'bio-img'} className='bio_last_img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mob">
                <div className="benefit_main">
                    <div style={{ zIndex: '2' }}>
                        <img src={BioImg1} alt='bio-img' className="benefit_img1" />
                    </div>

                    <div className="container benefit">
                        <div className="row align-items-center">
                            <div className="col-md-7" >
                                <div className="benefit_text">
                                    <div className="bene2">
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
                            </div>
                            <div className="col-md-5">
                                <div className="text-center">
                                    <img src={benefitMain} alt={'bio-img'} className='bio_last_img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Benefit;