import React from 'react'
import './Utilities.css';
import UtilityImg from '../../assets/images/10.png';
import { Parallax } from 'react-scroll-parallax';

const Utilities = () => {
  return (
    <div className='container'>
      <div className='utilities_main'>

        <Parallax translateY={[-20, 10]}>
          <img src={UtilityImg} alt='utility' className='utility_img' />
        </Parallax>

        <Parallax speed={-30}>
          <div className='my-3' data-aos='zoom-in'>
            <h1 > Utilities </h1>
            <p>Supply<span>:</span> 1234<span>;</span> open mint<span>:</span> 1111Elastic Waves Utilities:</p>
          </div>

          <div className='my-2' data-aos='zoom-in'>
            <h4>Elastic Waves Utilities:</h4>
          </div>

          <div className='my-4 utilities_text' data-aos='zoom-in'>
            <h5>Important note: Each holder can only get access to one utility, the utilities are subject transfer,
              the holders that will have access to the utilities
              will be picked via lottery; the utilities are subject to change.</h5>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

export default Utilities