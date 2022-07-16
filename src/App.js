import React, { useEffect } from "react";
import Home from "./Container/Home/Home";
import gsap from 'gsap';

const App = () => {

    useEffect(() => {

        const timeline = gsap.timeline();
        timeline.to(".loader", {
            delay: 2,
            duration: window.onloadeddata,
            opacity: 0
        });
        timeline.to(".animation", {
            delay: 2,
            duration: window.onloadeddata,
            y: "100%",
            ease: "power4.out"
        });
        timeline.to(".animation", {
            zIndex: -10,
            opacity: 0,
            visibility: "hidden",
            height: 0,
            width: 0,
        });
    },[])

    return (
        <React.Fragment>
            <div className="animation">
                <div className="loader"></div>
            </div>

            <div className="home">
                <Home />
            </div>
        </React.Fragment>

    )
}

export default App;