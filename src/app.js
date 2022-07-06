import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider >
        <Router>
          <Routes>
            <Route path={'/'} element={<Home />} />
          </Routes>
        </Router>
    </ParallaxProvider>
  );
}

export default App;