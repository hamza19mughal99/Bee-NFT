import React from "react";
import BioImg from "../../assets/images/artist_main.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Bio.css";

const Bio = () => {
    AOS.init();
    return (
        <div className="container bio_main">
            <div className="row direction">
                <div className="col-md-6">
                    <img src={BioImg} alt={'bio-img'}/>
                </div>
                <div className="col-md-6" data-aos="zoom-in">
                    <div className="bio_text">
                        <h1>ARTIST BIO</h1>
                        <h6>All About Elastic Waves</h6>
                        <p>My artistic journey started in 2020, also known as the peak of the COVID-19 pandemic.
                            What started as a hobby to avoid the stagnation
                            introduced to our lives later turned into an intense desire to create art.
                            This desire later became a passion for creating digital multimedia pieces.
                            The pieces seen in this site are my Multimedia Waves Collection.
                            These pieces have a lengthy creation process as they start as Gel Prints and turn into digital pieces.
                            Apart from this collection, I do large-scale projects and other variations of printmaking.
                            This website is a door into my consciousness, my emotions, and thoughts.
                            I hope you enjoy it here.</p>
                        <button className="get_touch_btn">GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bio;