import React, { useEffect, useState } from "react";
import Home from "./Container/Home/Home";
import gsap from 'gsap';

const App = () => {

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(".animate", {
            delay: 3,
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
            zIndex: -10
        });
        // timeline.from(".home", {
        //     delay: .5,
        //     duration: .8,
        //     skewY: 10,
        //     y: 100,
        //     x: -199,
        //     opacity: 0
        // })
    },[])



    return (
        <React.Fragment>
            <div class="animation">
                <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
                <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
                <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
                <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
                <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
                <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
            </div>

            <div className="home">
                <Home />
            </div>
        </React.Fragment>

    )
}

export default App;