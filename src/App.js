import logo from './logo.svg';
import './App.css';

import React from 'react';
import CloudButton from './Cloud'; // Adjust the path based on your project structure

const App = () => {
  const handleCloudClick = () => {
    // Your custom logic when the cloud button is clicked
    console.log('Cloud clicked!');
  };

  return (
    <div>
      <h1>Your App</h1>
      <CloudButton label="Click me" color="#F08080" />
    </div>
  );
};

export default App;
