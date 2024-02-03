import React from "react";
import MotherHuggingImage from "./images/mother_hugging.jpg";

const SimplePage = () => {
    const titleStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
        fontSize: "50px", // Adjust spacing between the title and emojis
    };

    const centerContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        textAlign: "center",
    };

    const imageStyle = {
        maxWidth: "100%", // Make the image responsive within its container
        height: "50vh", // Maintain aspect ratio
    };

    const contentStyle = {
        maxWidth: "800px", // Adjust the maximum width of the content
    };

    const paragraphStyle = {
        fontSize: "2vw", // Font size relative to the viewport width
    };

    return (
        <div style={centerContainerStyle}>
            <h1>Welcome to the Simple Page</h1>
            <img
                src={MotherHuggingImage}
                alt="Clipart Image"
                style={imageStyle}
            />
            <div style={contentStyle}>
                <p style={paragraphStyle}>
                    This is some text on the simple page. It will adjust its
                    size based on the size of the page. You can adjust the
                    maximum width and font size as needed.
                </p>
            </div>
        </div>
    );
};

export default SimplePage;
