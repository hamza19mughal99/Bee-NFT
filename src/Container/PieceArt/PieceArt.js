import React, { useEffect } from "react";
import BioImg from "../../assets/images/4.png";
import './Piece.css';
import PieceArtImg from "../../assets/images/nft2.png"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PieceArt = () => {

    useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: ".piece",
                pin: true,
                start: "center center",
                end: "+=600",
            }
        })
            .to(".piece", {
                opacity: 1,
                duration: 0.5
            })
    },[])

    return (
        <div className="container piece_art">
            <div className="row align-items-center">
                <div className="col-md-5 text-center">
                    <img src={PieceArtImg} alt={'bio-img'} className='first_img' />
                </div>

                <div className="col-md-7">
                    <div className="piece_text">
                        <div className="piece">
                            <p>Within these short years, she has created over 2000 pieces of art and her talents and aspirations bloomed into a form of self-expression. Apart from the Elastic Waves Collection, she has engaged in
                                various large-scale projects and other
                                variations of printmaking.</p>
                            <p>She has been lucky enough to have participated in many collaborative projects,
                                as well as exhibiting in a solo capacity, which has solidified her reputation in the art world.
                                If you would like to find out more about my process, get in touch.</p>
                            <button className='get_touch_btn'>GET IN TOUCH</button>
                        </div>
                    </div>
                </div>
                <div className="piece_bg">
                    <img src={BioImg} alt={'bio-img'} />
                </div>
            </div>
        </div>
    )
}
export default PieceArt;