// BackgroundPage.js
import React from 'react';
import CloudButton from './Cloud';

const CloudBackground = ({ numberOfClouds }) => {
  const handleCloudClick = () => {
    //console.log('Cloud clicked!');
    window.confirm(`clicked`)
    // Add your custom click event logic here
  };

  const renderClouds = () => {
    const clouds = [];
    for (let i = 0; i < numberOfClouds; i++) {
      clouds.push(<CloudButton key={i} label={`Cloud ${i + 1}`} onClick={handleCloudClick} />);
    }
    return clouds;
  };

  return (
    <div>
      <h1>Background Page</h1>
      {renderClouds()}
    </div>
  );
};

export default CloudBackground;
