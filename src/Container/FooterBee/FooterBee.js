import React from 'react';
import FooterImg from "../../assets/images/footerBee.png";
import './FooterBee.css';

const FooterBee = () => {
    return (
        <div className='container'>
            <div className='footerBee_main'>
                <div className='text-center'>
                    <img src={FooterImg} alt='footer' />
                </div>

                <p className='text-center'>I have touched upon and poured all my talents into each and every one of these 1111
                    25 pieces. I hope this collection sparks joy, curiosity, and passion in every single one of you as it
                    did in me.</p>
            </div>
        </div>
    )
}

export default FooterBee