import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TitleScreen.css";

const TitleScreen = () => {
    const [showClouds, setShowClouds] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let timeoutId;

        if (showClouds) {
            // Set a timeout for the duration of the cloud animation
            const timeoutId = setTimeout(() => {
                // Navigate to a different page ("/main") after the animation
                navigate("/start");
            }, 4000); // Adjust the timeout based on the duration of your cloud animation

            // Clear the timeout when the component unmounts or when animation is done
            return () => clearTimeout(timeoutId);
        }
    }, [showClouds, navigate]);

    const handleStartButtonClick = () => {
        setShowClouds(true);
    };

    const renderCloudAnimation = () => {
        const cloudCount = 30; // Adjust the number of clouds
        const clouds = [];

        for (let i = 0; i < cloudCount; i++) {
            const style = {
                left: `${Math.random() * 100}vw`, // Random horizontal position
                animationDelay: `-${Math.random() * 3}s`, // Random animation delay
            };

            clouds.push(
                <span key={i} className="cloud movingCloud" style={style} />
            );
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
            {showClouds && (
                <div className="clouds">{renderCloudAnimation()}</div>
            )}
        </div>
    );
};

export default TitleScreen;
