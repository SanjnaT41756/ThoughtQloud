import React from "react";
import "./Cloud.css";
const CloudButton = ({ onClick, label, color }) => {
    return (
        <button className="cloud" onClick={onClick}>
            <span className="cloud-text">{label}</span>
        </button>
    );
};

export default CloudButton;
