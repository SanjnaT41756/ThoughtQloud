import React from 'react';
import './Cloud.css'
import { useNavigate } from 'react-router-dom';


const CloudButton = ({ onClick, label, color }) => {

  const navigate = useNavigate();

  const handleCloudClick = () => {
    // Navigate to the '/faces' route when a cloud is clicked
    navigate('/faces');
  };

  return (
      <button className="cloud" onClick={handleCloudClick}>
      <span className="cloud-text">{label}</span>
    </button>
);};

export default CloudButton;
