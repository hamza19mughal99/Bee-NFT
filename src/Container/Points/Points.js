import React, {useEffect} from 'react'
import './Points.css';
import PointImg1 from "../../assets/images/10.png";
import PointImg2 from "../../assets/images/7.png";
import { Parallax } from 'react-scroll-parallax';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Points = () => {

  useEffect(() => {

    gsap.timeline({
        scrollTrigger: {
            trigger: ".poi",
            pin: true,
            start: "center center",
            end: "+=600",
        }
    })
        .to(".poi", {
            opacity: 1,
            duration: 0.5
        })
})

  return (
    <div className='container points_main'>
      {/* <Parallax speed={10}> */}
        <img src={PointImg1} alt='point_img1' className='point_img1' />
      {/* </Parallax> */}

      {/* <Parallax speed={-10} className="main-p-ul"> */}
        <ul className='poi'>
          <li>65 of our holders will be shipped the print of their NFT</li>
          <li>42 of our holders will be shipped the plate of their NFT65 of our holders will
            be shipped the print of their NFT</li>
          <li>48 of our holders will have the opportunity to meet BeeMel and
            have a workshop with her in LA.</li>
          <li>300 of our holders will be given XFunds Trading Group credits.</li>
          <li>50 of our holders will have the opportunity to meet BeeMel and the
            remainder of the team over webinars</li>
          <li>5 of our holders will be given the chance to present their art to
            BeeMel and the XFunds Team.</li>
          <li>under the benefits sector leave the text for now will send new text
            when ready</li>
        </ul>
      {/* </Parallax> */}

      {/* <Parallax speed={10} className="main-p-img"> */}
      <div className='main-p-img'>
      <img src={PointImg2} alt='point_img1' className='point_img2' />
      </div>
      {/* </Parallax> */}
    </div>
  )
}

export default Points