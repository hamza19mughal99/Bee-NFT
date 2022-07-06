import React, {useEffect} from 'react'
import './Utilities.css';
import UtilityImg from '../../assets/images/10.png';
// import { Parallax } from 'react-scroll-parallax';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Utilities = () => {

  useEffect(() => {

    gsap.timeline({
        scrollTrigger: {
            trigger: ".utili",
            pin: true,
            start: "center center",
            end: "+=600",
        }
    })
        .to(".utili", {
            opacity: 1,
            duration: 0.5
        })
})

  return (
    <div className='container utilities_main'>

      {/* <Parallax translateY={[-20, 10]}> */}
      <img src={UtilityImg} alt='utility' className='utility_img' />
      {/* </Parallax> */}

      {/* <Parallax speed={-20}> */}
      <div className='utili'>
        <div className='my-3'>
          <h1 > Utilities </h1>
          <p>Supply<span>:</span> 1234<span>;</span> open mint<span>:</span> 1111Elastic Waves Utilities:</p>
        </div>

        <div className='elastic_utilities'>
          <h4 className='text-center'>Elastic Waves Utilities:</h4>
        </div>

        <div className='my-4 utilities_text' data-aos='zoom-in'>
          <p>Important note: Each holder can only get access to one utility, the utilities are subject transfer,
            the holders that will have access to the utilities
            will be picked via lottery; the utilities are subject to change.</p>
        </div>
      </div>
      {/* </Parallax> */}
    </div>
  )
}

export default Utilities