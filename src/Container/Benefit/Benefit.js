import React from "react";
import BenefitImg from "../../assets/images/benefits_main.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Benefit.css"

const Benefit = () => {
    AOS.init();
    return (
        <div className="benefit_main">
            <div className="welcome_benefit_head" data-aos="zoom-in-up">
                <h1>“ <span>Welcome</span> to <br />
                    Elastic Waves <span>Art</span>”</h1>
            </div>

            <div className="container benefit">
                <div className="row align-items-center">
                    <div className="col-md-7 benefit_text" data-aos="zoom-in-up">
                        <h1>BENEFITS</h1>
                        <p> My artistic journey started in 2020, also known as the peak of the COVID-19 pandemic. What started as a hobby to avoid the stagnation
                            introduced to our lives later turned into an intense desire to create art.
                            This desire later became a passion for creating digital multimedia pieces.
                            The pieces seen in this site are my Multimedia Waves Collection.
                            These pieces have a lengthy creation process as they start as Gel Prints and turn into digital pieces.
                            Apart from this collection, I do large-scale projects and other variations of printmaking.
                            This website is a door into my consciousness, my emotions, and thoughts. I hope you enjoy it here.</p>
                        <button className="get_touch_btn" style={{width: 'fit-content'}}>GET IN TOUCH</button>
                    </div>
                    <div className="col-md-5 benefit_img">
                        <img src={BenefitImg} alt='benefit' />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Benefit;