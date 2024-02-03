import React from "react";
import Faces from "./Faces.js"; // Adjust the import path based on your file structure
import SimplePage from "./SimplePage";

import CloudBackground from "./CloudBackground";
const App = () => {
    const numberOfClouds = 3; // Specify the number of clouds you want
    return (
        <div>
            {/*
            <CloudBackground numberOfClouds={numberOfClouds} />
            <Faces />
            */}
            <SimplePage />
        </div>
    );
};

export default App;
