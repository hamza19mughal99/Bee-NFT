import React, { useEffect } from "react";
import diversityImg from "../../assets/images/nft10.png";
import gsap from 'gsap';
import './Abundance.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Abundance = () => {

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".abundance",
                pin: true,
                start: "center center",
                end: "+=600",
                onLeave: () => ScrollTrigger.clearScrollMemory()
            }
        })
            .to(".abundance", {
                opacity: 1,
                duration: 0.5
            })
    }, [])

    return (
        <div className='container utilities_main'>

            <div>
                <img src={diversityImg} alt='diversity' className="diversity_img" />
            </div>

            <div className='my-4 utilities_text'>
                <div className="abundance">
                    <p>An abundance of elastic and creative opportunities come to the holders of the collection.
                        Meeting the artist, having your art showcased, and many many more.
                    </p>
                    <button className="get_touch_btn">Learn more</button>
                </div>
            </div>
        </div>
    )
}
export default Abundance;