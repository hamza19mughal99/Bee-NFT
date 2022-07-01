import React from "react";
import BioImg from "../../assets/images/4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Piece.css';
import PieceArtImg from "../../assets/images/nft2.png"
import { Parallax } from 'react-scroll-parallax';

const PieceArt = () => {
    AOS.init();
    return (
        <div className="container piece_art">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <Parallax speed={-10}>
                        <div>
                            <img src={PieceArtImg} alt={'bio-img'} />
                        </div>
                    </Parallax>
                </div>

                <div className="col-md-7">
                    <Parallax speed={-20}>
                        <div className="piece_text" data-aos='fade-left' data-aos-offset="550"
                            data-aos-easing="ease-in-sine">
                            <p>Within these short years, she has created over 2000 pieces of art and her talents and aspirations bloomed into a form of self-expression. Apart from the Elastic Waves Collection, she has engaged in
                                various large-scale projects and other
                                variations of printmaking.</p>
                            <p>She has been lucky enough to have participated in many collaborative projects,
                                as well as exhibiting in a solo capacity, which has solidified her reputation in the art world.
                                If you would like to find out more about my process, get in touch.</p>
                            <button className='get_touch_btn'>GET IN TOUCH</button>
                        </div>
                    </Parallax>
                </div>
                <Parallax speed={10}>
                    <div className="piece_bg">
                        <img src={BioImg} alt={'bio-img'} />
                    </div>
                </Parallax>

                <div className="col-md-12" data-aos='zoom-in'>
                    <Parallax speed={-20}>
                        <div className="pieceArt_text" data-aos='zoom-in'>

                        </div>
                    </Parallax>
                </div>
            </div>

        </div>
    )
}
export default PieceArt;