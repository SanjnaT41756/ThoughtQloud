import React, { useState } from "react";
import "./TitleScreen.css";

const TitleScreen = () => {
    const [showClouds, setShowClouds] = useState(false);

    const handleStartButtonClick = () => {
        setShowClouds(true);

        // Reset the animation state after a certain duration
        setTimeout(() => {
            setShowClouds(false);
        }, 4000); // Adjust the timeout based on the desired duration of the animation
    };

    const renderClouds = () => {
        const cloudCount = 30; // Adjust the number of clouds
        const clouds = [];

        for (let i = 0; i < cloudCount; i++) {
            const style = {
                left: `${Math.random() * 100}vw`, // Random horizontal position
                animationDelay: `-${Math.random() * 3}s`, // Random animation delay
            };

            clouds.push(<span key={i} className="cloud" style={style} />);
        }

        return clouds;
    };

    return (
        <div className={`title-screen ${showClouds ? "show-clouds" : ""}`}>
            <h1 className="app-name">Thought Qloud</h1>
            <p className="app-description-text">Queer Education for Parents</p>
            <button className="start-button" onClick={handleStartButtonClick}>
                Start
            </button>

            {showClouds && <div className="clouds">{renderClouds()}</div>}
        </div>
    );
};

export default TitleScreen;
