import logo from './logo.svg';
import './App.css';

import React from 'react';
import CloudBackground from './CloudBackground';
const App = () => {
  const numberOfClouds = 5; // Specify the number of clouds you want
  return (
    <div>
      <h1>Your App</h1>
      <CloudBackground numberOfClouds={numberOfClouds} />
    </div>
  );
};

export default App;
