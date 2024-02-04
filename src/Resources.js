import React from "react";
import { useNavigate } from "react-router-dom";

const Resources = () => {
    const navigate = useNavigate();
    const titleStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
        fontSize: "50px", // Adjust spacing between the title and emojis
        color: "#ffffff",
    };

    const centerContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "#87ceeb",
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
            <h1 style={titleStyle}>Resources</h1>

            <a
                style={paragraphStyle}
                href="https://pflag.org/resource/parents-comingout/"
            >
                PFLAG Coming Out Help for Families, Friends, and Allies
            </a>
            <a style={paragraphStyle} href="http://familyproject.sfsu.edu/">
                Family Acceptance Project
            </a>
            <a style={paragraphStyle} href="http://www.familyequality.org/">
                Family Equality Council
            </a>
            <a
                style={paragraphStyle}
                href="http://www.plannedparenthood.org/parents/parenting-lgbt-and-questioning-kids"
            >
                Planned Parenthood Guide to Parenting LGBT and Questioning Kids
            </a>
        </div>
    );
};

export default Resources;
