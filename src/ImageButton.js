import React from "react";

const ImageButton = ({ onClick, imageUrl, altText }) => {
    return (
        <button onClick={onClick}>
            <img src={imageUrl} alt={altText} />
        </button>
    );
};

export default ImageButton;
