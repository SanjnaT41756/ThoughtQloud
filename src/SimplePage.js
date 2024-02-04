import React from "react";
import { useNavigate } from "react-router-dom";

const SimplePage = ({ title, imageUrl, text }) => {
    const navigate = useNavigate();
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

    const buttonStyle = {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#3498db", // Change the background color as needed
        color: "#ffffff", // Change the text color as needed
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
        outline: "none",
    };

    const navigateResources = () => {
        navigate("/resources");
    };

    return (
        <div style={centerContainerStyle}>
            <h1>{title}</h1>
            <img src={imageUrl} alt="Clipart Image" style={imageStyle} />
            <div style={contentStyle}>
                <p style={paragraphStyle}>{text}</p>
            </div>
            <button style={buttonStyle} onClick={navigateResources}>
                More Resources
            </button>
        </div>
    );
};

export default SimplePage;
