import React from "react";

const SimplePage = ({ title, imageUrl, text }) => {
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
            <h1>{title}</h1>
            <img src={imageUrl} alt="Clipart Image" style={imageStyle} />
            <div style={contentStyle}>
                <p style={paragraphStyle}>{text}</p>
            </div>
        </div>
    );
};

export default SimplePage;
