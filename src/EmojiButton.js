import React from "react";

const EmojiButton = ({ onClick, emoji, label }) => {
    const buttonStyle = {
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontSize: "100px", // Adjust the font size as needed
    };

    const labelStyle = {
        marginTop: "5px", // Adjust spacing between emoji and label
        fontSize: "14px", // Adjust the font size for the label
    };

    return (
        <button style={buttonStyle} onClick={onClick} title={label}>
            <span role="img" aria-label={label}>
                {emoji}
            </span>
            <span style={labelStyle}>{label}</span>
        </button>
    );
};

export default EmojiButton;
