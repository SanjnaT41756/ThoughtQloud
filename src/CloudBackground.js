// BackgroundPage.js
import React from 'react';
import CloudButton from './Cloud';
import { Link } from "react-router-dom";
import './CloudBackground.css'

const CloudBackground = ({ numberOfClouds }) => {
  //const handleCloudClick = () => {
    //console.log('Cloud clicked!');
    
    // Add your custom click event logic here
  //};

  const renderClouds = () => {
    const clouds = [];
    for (let i = 0; i < numberOfClouds; i++) {
      clouds.push(<CloudButton key={i} label={"Faces"} />);
    }
    return clouds;
  };

  return (
    <div className="background-page">
      <div className="cloud-container">
        {renderClouds()} 
      </div>
    </div>
  );
};

export default CloudBackground;
