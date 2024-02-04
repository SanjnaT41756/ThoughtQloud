import React from "react";
import "./Cloud.css";
import { useNavigate } from "react-router-dom";

const CloudButton = ({ label }) => {
    const navigate = useNavigate();

    const handleCloudClick = () => {
        // Navigate to the '/faces' route when a cloud is clicked
        if (
            label ==
            "My child has expressed interest in a non-normalized relationship"
        ) {
            navigate("/queer");
        } else if (label == "Just to learn") {
            navigate("/resources");
        } else if (
            label == "Are you suspicious of their queer identity?" ||
            label == "Did you find out in an argument?" ||
            label == "Did they tell you?"
        ) {
            navigate("/faces");
        } else if (label == "Ashamed") {
            navigate("/ashamed");
        } else if (label == "How could I not have known") {
            navigate("/info", { state: { infoPageIndex: 1 } });
        } else if (label == "I feel as if I don't know them anymore") {
            navigate("/info", { state: { infoPageIndex: 2 } });
        } else if (label == "I feel like they lied to me") {
            navigate("/info", { state: { infoPageIndex: 3 } });
        } else if (
            label ==
            "Everything that I thought for my child will no longer happen."
        ) {
            navigate("/info", { state: { infoPageIndex: 4 } });
        } else if (
            label ==
            "I don't want them to go through the hardships of being queer."
        ) {
            navigate("/info", { state: { infoPageIndex: 5 } });
        } else if (
            label == "I failed as a parent" ||
            label == "What will other people think?" ||
            label == "I don't want to be different" ||
            label == "It is against all my beliefs" ||
            label == "This is unnatural" ||
            label == "This challenges everything I once thought I knew" ||
            label == "I feel like they lied to me" ||
            label == "Do you know what being queer is?" ||
            label == "How did i not see the signs" ||
            label == "They dont seem gay to me" ||
            label == "ok" ||
            label == "learn more"
        ) {
            navigate("/info", { state: { infoPageIndex: 0 } });
        } else if (label == "Religion") {
            navigate("/religion");
        } else if (label == "Deceit") {
            navigate("/deceit");
        } else if (label == "Dissapointment") {
            navigate("/dissapointment");
        } else if (label == "Yes") {
            navigate("/sure");
        } else if (label == "No") {
            navigate("/notSure");
        }
    };

    return (
        <button className="cloud" onClick={handleCloudClick}>
            <span className="cloud-text">{label}</span>
        </button>
    );
};

export default CloudButton;
