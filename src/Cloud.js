import React from "react";
import "./Cloud.css";
import { useNavigate } from "react-router-dom";

const CloudButton = ({ label }) => {
    const navigate = useNavigate();

    const handleCloudClick = () => {
        // Navigate to the '/faces' route when a cloud is clicked
        if (label == "My kid is queer") {
            navigate("/queer");
        } else if (
            label == "Are you suspicious of their queer identity?" ||
            label == "Did you find out in an argument?" ||
            label == "Did they tell you?"
        ) {
            navigate("/faces");
        } else if (label == "Ashamed") {
            navigate("/ashamed");
        } else if (
            label == "You failed as a parent" ||
            label == "You didnt want to be different" ||
            label == "they gross you out" ||
            label == "against beliefs" ||
            label == "uuuu" ||
            label == "challenge" ||
            label == "how not have known" ||
            label == "changes everyrhing" ||
            label == "they liars" ||
            label == "everything thought change" ||
            label == "Do you know what being queer is?" ||
            label == "How did i not see the signs" ||
            label == "They dont seem gay to me" ||
            label == "ok" ||
            label == "learn more"
        ) {
            navigate("/info");
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
