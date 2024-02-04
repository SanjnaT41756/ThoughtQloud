import React from "react";
import Faces from "./Faces.js"; // Adjust the import path based on your file structure
import SimplePage from "./SimplePage";

import MotherHuggingImage from "./images/mother_hugging.jpg";

import CloudBackground from "./CloudBackground";
const App = () => {
    const numberOfClouds = 3; // Specify the number of clouds you want
    const pageTitle = "Welcome to the Simple Page";
    const pageImageUrl = MotherHuggingImage; // Provide the image URL
    const pageText =
        "This is some text on the simple page. It will adjust its size based on the size of the page. You can adjust the maximum width, font size, and image size as needed.";

    return (
        <div>
            {/*
            <CloudBackground numberOfClouds={numberOfClouds} />
            <Faces />
            */}

            <SimplePage
                title={pageTitle}
                imageUrl={pageImageUrl}
                text={pageText}
            />
        </div>
    );
};

export default App;
