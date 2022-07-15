import React, { useEffect } from 'react'
import './Utilities.css';
import UtilityImg from '../../assets/images/nft7.png';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  }, [])

  return (
    <div className='container utilities_main'>

      <div>
        <img src={UtilityImg} alt='utility' className='utility_img' />
      </div>

      <div className='utili my-3'>
        <h1> “ Utilities ” </h1>
        <p>Supply<span>:</span> 1234<span>;</span> open mint<span>:</span> 1111Elastic Waves Utilities:</p>

        <div className='elastic_utilities'>
          <h4 className='text-center'>“ <span> Elastic Waves </span> Utilities ”</h4>
        </div>

        <div className='my-4 utilities_text'>
          <p>Important note: Each holder can only get access to one utility, the utilities are subject transfer,
            the holders that will have access to the utilities
            will be picked via lottery; the utilities are subject to change.</p>
        </div>
      </div>
    </div>
  )
}

export default Utilities