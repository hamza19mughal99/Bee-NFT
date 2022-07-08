import React, { useState } from "react";
import Home from "./Container/Home/Home";

const App = () => {

    // const [isLoading, setLoading] = useState(true);
    // const spinner = document.getElementById('spinner')

    // if (spinner) {
    //     setTimeout(() => {
    //         spinner.style.display = "none";
    //         setLoading(false)
    //     }, 500)
    // }

    return (
        // !isLoading && (
            <div>
                <Home />
            </div>
        // )
    )
}

export default App;