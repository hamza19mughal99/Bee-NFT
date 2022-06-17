import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
        <Router>
          <Routes>
            <Route path={'/'} element={<Home />} />
          </Routes>
        </Router>
    </ParallaxProvider>
  );
}

export default App;



// function square(arr1, arr2) {

//   for (let i = 0; i < arr1.length; i++) {
//     let index = arr2.indexOf(Math.pow(arr1[i], 2));

//     if (index >= 0) {
//       arr2.splice(index, 1)
//     }

//   }

//   if (arr2.length === 0) {
//     return true
//   }
//   else {
//     return false
//   }

// }

// console.log(square([1, 2, 3], [4, 9, 1])) // true
// console.log(square([2, 3, 4], [4, 5, 6])) // false
// console.log(square([2, 3, 4], [4, 9, 16])) //true