import React from "react";

const Faces = () => {
    const handleButtonClick = (buttonNumber) => {
        console.log(`Button ${buttonNumber} clicked!`);
        // Add your logic for each button click here
    };

    return (
        <div>
            <h1>Your Faces Page</h1>
            <div>
                <button onClick={() => handleButtonClick(1)}>Button 1</button>
                <button onClick={() => handleButtonClick(2)}>Button 2</button>
                <button onClick={() => handleButtonClick(3)}>Button 3</button>
                <button onClick={() => handleButtonClick(4)}>Button 4</button>
                <button onClick={() => handleButtonClick(5)}>Button 5</button>
            </div>
        </div>
    );
};

export default Faces;
