import React from "react";
import WelcomeMain from "../../assets/images/bee-three.gif";

import "./Welcome.css";
import Timer from "../../Components/Countdown/Countdown";

const Welcome = () => {
    return (
        <div className="welcome_main">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 welcome_text">
                        <p><b>Welcome</b> <br /> to Elastic Waves</p>

                        <div className="yellow_line"/>

                        <div className="mint">
                            <h5>MINT YOUR BEE</h5>
                            <div className="progress_bar"/>
                        </div>
                        <div className="minting_start">
                            <h6>Minting Start In:</h6>
                            <Timer />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={WelcomeMain} alt='welcome' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;