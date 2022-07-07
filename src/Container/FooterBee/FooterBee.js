import React from 'react';
import FooterImg from "../../assets/images/footerBee.png";
import './FooterBee.css';

const FooterBee = () => {
    return (
        <div className='container'>
            <div className='footerBee_main'>
                <img src={FooterImg} alt='footer' />
                <p>I have touched upon and poured all of my talents into each and every one of these 1111 pieces.
                    I hope this collection sparks joy, curiosity, and passion in every single one of you as it did to me</p>
            </div>
        </div>
    )
}

export default FooterBee