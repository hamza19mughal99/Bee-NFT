import React, { useEffect, useState } from "react";
import Home from "./Container/Home/Home";
import gsap from 'gsap';

const App = () => {

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(".loader", {
            delay: 2,
            duration: .5,
            opacity: 0
        });
        timeline.to(".animation", {
            delay: 1,
            duration: 1,
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
            <div class="animation">
                <div className="loader"></div>
            </div>

            <div className="home">
                <Home />
            </div>
        </React.Fragment>

    )
}

export default App;