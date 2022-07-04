import React from "react";
import BenefitImg from "../../assets/images/3.png";
import benefitMain from "../../assets/images/nft3.png";
import { Parallax } from 'react-scroll-parallax';
import BioImg1 from "../../assets/images/1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Benefit.css"

const Benefit = () => {
    AOS.init();
    return (
        <div className="benefit_main">
            <Parallax speed={-20} style={{ position: 'relative', zIndex: '2' }}>
                <div className="welcome_benefit_head" data-aos="zoom-in" data-aos-offset="500"
                    data-aos-easing="ease-in-sine">
                    <h1>“ <span>Welcome</span> to <br />
                        Elastic Waves <span>Art</span>”</h1>
                </div>
            </Parallax>
            <Parallax speed={-10}>
                <img src={BioImg1} alt='bio-img' className="benefit_img1" />
            </Parallax>
            <Parallax speed={10}>
                <img src={BenefitImg} alt='benefit' className="benefit_img" />
            </Parallax>

            <Parallax speed={-20}>
                <div className="container benefit">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <Parallax speed={-20}>
                                <div className="benefit_text" data-aos="fade-right" data-aos-offset="700"
                    data-aos-easing="ease-in-sine">
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
                            </Parallax>
                        </div>
                        <div className="col-md-5">
                            <Parallax speed={-20}>
                                <div className="text-center">
                                    <img src={benefitMain} alt={'bio-img'} className='bio_last_img'/>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Benefit;